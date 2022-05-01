import { useParams, useHistory } from "react-router-dom";
import { useStateItem } from "../data/store";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { DummyInterface, Params } from "../types";

export default function PostDetail({ dummy }: DummyInterface) {
  const { postId } = useParams() as Params;
  const { goBack } = useHistory();
  const { title, body } = useStateItem("posts", dummy ? "1" : postId);
  return (
    <Box sx={{ p: 2 }}>
      <Link onClick={goBack}> Go Back</Link>
      <Typography sx={{ my: 2 }} variant="h5" color="primary">
        {title}
      </Typography>
      <Typography variant="body1">{body}</Typography>
    </Box>
  );
}
