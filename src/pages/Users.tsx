import Grid from "@mui/material/Grid";
import Box from "@mui/material/box";
import LoaderComponent from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
import ErrorComponent from "../components/ErrorComponent";

import Navigation from "./Navigation";

import useUsers from "../hooks/useUsers";
import { useStateValue } from "../data/store";
import { userPageNavOptions } from "../data/navdata";
import { Link } from "react-router-dom";
import { State } from "../types";
import {lazy, Suspense} from "react"
import ErrorBoundary from "../components/ErrorBoundary";

const UsersList = lazy(()=>import("../components/UserList")) ;


export default function Users() {
  const { error, refresh } = useUsers({ effects: [] });
  const { users, loadingUsers }:State = useStateValue()
  const success = Boolean(users);

  return (
    <>
      {success && (
        <Grid container>
          <Grid item xs={12} md={3} lg={4} sx={styles["list"]}>
            <ErrorBoundary>
              <Suspense fallback={<LoaderComponent/>} >
                  <UsersList users={users} />
              </Suspense>
            </ErrorBoundary>
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
