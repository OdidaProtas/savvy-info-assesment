import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Params, Post, UseDataEffect } from "../types";
import { useDispatch, useStateValue } from "../data/store";

import useRequest from "./useRequest";

export default function usePosts({ effects, dummy }: UseDataEffect) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { posts, postsArchive } = useStateValue();
  const params = useParams() as Params;

  const id = dummy ? "1" : params.id;

  const request = useRequest();

  async function updateList() {
    //   makes a loader component visible while updating data
    dispatch({ type: "TOGGLE_LOADER", context: "Posts" });

    // Dummy state  based caching to prevent multiple requests
    const [cash, e] = getCash();

    if (!!e) {
      // replaces current posts with cached postes
      dispatch({
        type: "Add_MULTIPLE",
        context: "posts",
        payload: cash as Post[]
      });
      //   removes loading indicator
      dispatch({ type: "TOGGLE_LOADER", context: "Posts" });
      return;
    }

    // Saves existing user posts to posts cache object
    if (Boolean(posts?.length)) saveCash();

    // Make a network request and modify global state
    const [, err] = await request({
      url: `/posts/?userId=${id}`,
      method: "get",
      action: "ADD_MULTIPLE",
      context: "posts"
    });

    // Sets error to show to user
    if (err) setError(true);
  }

  function saveCash(cash?: any) {
    //   Saves posts posts to to the posts archive
    dispatch({
      type: "CONCAT_MULTIPLE",
      context: "postsArchive",
      payload: (cash || posts) as Post[]
    });
  }

  function getCash() {
    //   filters archived posts with user id
    const val = (postsArchive || []).filter(
      (post: Post) => post.userId === parseInt(id)
    );
    // returns array of posts and error as index 0 and 1 respectively
    if (val.length) {
      return [val, null];
    }
    return [null, true];
  }

  useEffect(() => {
    //   excecutes async function in useEffect
    async function doUpdate() {
      await updateList();
    }
    doUpdate();
  }, effects);

  return { error, refresh: updateList };
}
