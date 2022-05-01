import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { useParams, Link } from "react-router-dom";
import { Params, Post, State } from "../types";
import { useStateValue } from "../data/store";

function UserPostItem({ post }: any) {
  const { title, body }: Post = post;
  const { id } = useParams() as Params;
  return (
    <Paper>
      <Box sx={styles["postItem"]}>
        <Typography color="primary" variant="h6">
          {title}
        </Typography>
        <Divider sx={styles["divider"]} />
        <Typography sx={{ color: "text.secondary", mb: 1 }} variant="caption">
          {body}
        </Typography>
        <br />
        <Link to={`/Users/${id}/Posts/${post?.id}`}>View Post</Link>
      </Box>
    </Paper>
  );
}
export default function PostList() {
  const { posts }: State = useStateValue();
  return (
    <>
      {posts?.map((post: Post, idx: number) => (
        <Grid item xs={4} key={idx}>
          <UserPostItem post={post} />
        </Grid>
      ))}
    </>
  );
}

const styles = {
  title: { mt: 2 },
  postsContainer: {
    height: 280,
    overflow: "auto",
    mt: 1
  },
  postItem: {
    minHeight: 120,
    p: 2
  },
  divider: {
    my: 2
  }
};
