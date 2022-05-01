import { useEffect, useState } from "react";
import { useStateValue, useDispatch } from "../data/store";
import { State, UseDataEffect } from "../types";
import useRequest from "./useRequest";

export default function useUsers({ effects }: UseDataEffect) {
  const dispatch = useDispatch();
  //   Gets users and loading indicator for users from global state
  const { loadingUsers, users }:State = useStateValue();
  const [error, setError] = useState(false);

  //  Make network requests with axios
  const request = useRequest();

  async function updateList() {
    //   Prevents making duplicate API calls
    if (!Boolean(users) && !loadingUsers) {
      dispatch({ type: "TOGGLE_LOADER", context: "Users" });
      //  fetches and adds multiple users to to the global state
      //   returns error to display error message
      const [, err] = await request({
        url: "/users",
        method: "get",
        action: "ADD_MULTIPLE",
        context: "users"
      });
      //   Displays error message
      if (err) setError(true);
    }
  }

  useEffect(() => {
    //   Perfoms async request in useEffect
    async function update() {
      await updateList();
    }
    update();
  }, effects);

  return { error, refresh: updateList };
}
