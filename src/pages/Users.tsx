import Grid from "@mui/material/Grid";
import Box from "@mui/material/box";
import UsersList from "../components/UserList";
import LoaderComponent from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
import ErrorComponent from "../components/ErrorComponent";

import Navigation from "./Navigation";

import useUsers from "../hooks/useUsers";
import { useStateValue } from "../data/store";
import { userPageNavOptions } from "../data/navdata";
import { Link } from "react-router-dom";
import { State } from "../types";

export default function Users() {
  const { users, loadingUsers }: State = useStateValue() || {
    users: [],
    loadingUsers: false
  };
  const success = Boolean(users);
  const { error, refresh } = useUsers({ effects: [] });

  return (
    <>
      {success && (
        <Grid container>
          <Grid item xs={12} md={3} lg={4} sx={styles["list"]}>
            <UsersList />
          </Grid>
          <Grid item xs pl={2}>
            <Box sx={styles["link"]}>
              <Link to="/">Home</Link>
            </Box>
            <Navigation options={userPageNavOptions} />
          </Grid>
        </Grid>
      )}
      {loadingUsers && (
        <>
          <LoaderComponent />
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
  list: {
    bgcolor: "background.paper"
  },
  link: {
    textAlign: "center"
  }
};
