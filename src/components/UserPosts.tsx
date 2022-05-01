import Grid from "@mui/material/Grid";
import RefreshButton from "./RefreshButton";
import ErrorComponent from "./ErrorComponent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useParams } from "react-router-dom";
import { useStateValue } from "../data/store";
import { postsRoutes } from "../data/navdata";
import { DummyInterface, Params, State } from "../types";

import Navigation from "../pages/Navigation";

import usePosts from "../hooks/usePostsLists";

export default function UserPosts({ dummy }: DummyInterface) {
  // Obtains user's id from route parameters
  const { id } = useParams() as Params;
  const { posts, loadingPosts }: State = useStateValue();
  const { error, refresh } = usePosts({ effects: [id], dummy });
  // Initial posts state is undefined
  const success = Boolean(posts);

  return (
    <>
      {loadingPosts && <LinearProgress />}
      {success && (
        <>
          <Typography sx={styles["title"]} variant="h6">
            {posts?.length || 0} Posts.
          </Typography>
          <Grid container sx={styles["postsContainer"]} spacing={2}>
            <Navigation options={postsRoutes} />
          </Grid>
        </>
      )}
      {error && (
        <>
          <ErrorComponent />
          <RefreshButton refresh={refresh} />
        </>
      )}
    </>
  );
}

const styles = {
  title: { mt: 2 },
  postsContainer: {
    height: 280,
    overflow: "auto",
    mt: 3
  },
  postItem: {
    minHeight: 120,
    p: 2
  },
  divider: {
    my: 2
  }
};
