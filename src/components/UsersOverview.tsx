import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useStateValue } from "../data/store";
import { State } from "../types";

export default function UsersOverview() {
  const { users }: State = useStateValue();
  const numOfUsers = users?.length || 0;
  return (
    <Box sx={styles["root"]}>
      <Box>
        <Typography variant="h6">{numOfUsers} users retrieved.</Typography>
        <Divider sx={styles["divider"]} />
        <Typography sx={styles["caption"]} variant="caption">
          Select a user to view more information and posts
        </Typography>
      </Box>
    </Box>
  );
}

const styles = {
  root: {
    textAlign: "center",
    height: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    my: 3
  },
  caption: {
    color: "text.secondary"
  }
};
