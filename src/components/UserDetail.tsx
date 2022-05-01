import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import UserPosts from "./UserPosts";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useApptSuite from "../hooks/useSuite";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

import { useParams, useHistory } from "react-router-dom";
import { useStateItem } from "../data/store";
import { AddressInterface, DummyInterface, Params, User } from "../types";

export default function UserDetail({ dummy }: DummyInterface) {
  const { id } = useParams() as Params;
  const { edited }: User = useStateItem("users", dummy ? "1" : id);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <UserDetailHeader dummy={dummy} />
        </Grid>
        <Grid item xs>
          <AddressHeader dummy={dummy} />
        </Grid>
      </Grid>
      {edited && (
        <Typography color="primary" variant="caption">
          Username has been edited
        </Typography>
      )}
      <Divider sx={styles["divider"]} />
      <UserPosts />
    </div>
  );
}

function AddressHeader({ dummy }: DummyInterface) {
  const { suite, members }: AddressInterface = useApptSuite({ dummy });
  const { push } = useHistory();
  const { id } = useParams() as Params;
  return (
    <Box>
      <Stack
        sx={{
          textAlign: "right",
          bgcolor: "lightgray",
          p: 2,
          borderRadius: "4px"
        }}
        spacing={2}
      >
        <Typography sx={styles["pageTitle"]}>Address</Typography>
        <Divider />
        <Tooltip title={<span>({members?.length} Residents)</span>}>
          <Typography variant="h6">
            Suite: {suite} ({members?.length} Members){" "}
          </Typography>
        </Tooltip>
        <Divider />
        <Link onClick={() => push(`/Suite/${dummy ? 1 : id}`)}>View Suite</Link>
      </Stack>
    </Box>
  );
}

function UserDetailHeader({ dummy }: DummyInterface) {
  const { id } = useParams() as Params;
  const { push } = useHistory();
  const { name, username }: User = useStateItem("users", dummy ? "1" : id);

  return (
    <Box>
      <Stack spacing={1}>
        <Typography sx={styles["pageTitle"]}>User details</Typography>
        <Typography variant="h5">Name: {name}</Typography>
        <Typography>Username: @{username}</Typography>
        <Button
          disableElevation
          variant="contained"
          sx={styles["editButton"]}
          onClick={() => push(`/Users/${id}/edit`)}
        >
          Edit Profile
        </Button>
      </Stack>
    </Box>
  );
}

const styles = {
  pageTitle: {
    color: "text.secondary"
  },
  divider: {
    mt: 2
  },
  editButton: {
    textTransform: "none"
  }
};
