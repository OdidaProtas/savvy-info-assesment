import Map from "../components/Map";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Marker, useMap, Popup } from "react-leaflet";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import useApptSuite from "../hooks/useSuite";
import { useStateValue } from "../data/store";
import useUsers from "../hooks/useUsers";
import Stack from "@mui/material/Stack";
import ErrorComponent from "../components/ErrorComponent";
import RefreshButton from "../components/RefreshButton";
import { AddressInterface, DummyInterface, State, User } from "../types";

export default function Address({ dummy }: DummyInterface) {
  const { goBack, push } = useHistory();
  const { users }: State = useStateValue();
  const hasData = Boolean(users);
  const { error, refresh } = useUsers({ effects: [] });
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Link onClick={() => push("/")}>Home </Link>
        <Link sx={{ ml: 3 }} onClick={goBack}>
          Go Back{" "}
        </Link>
      </Box>
      <Grid container>
        <Grid item xs>
          {hasData && <AddressDetail dummy={dummy} />}
          {error && (
            <>
              <ErrorComponent />
              <RefreshButton refresh={refresh} />
            </>
          )}
        </Grid>
        <Grid item xs>
          <Map className="smallMap">
            {hasData && <AddressMap dummy={dummy} />}
          </Map>
        </Grid>
      </Grid>
    </>
  );
}

function AddressDetail({ dummy }: DummyInterface) {
  const { suite, members } = useApptSuite({ dummy });
  const { push } = useHistory();
  return (
    <Stack spacing={2}>
      <Typography variant="h6">{suite} Suite </Typography>
      <Typography>{members?.length} Members</Typography>
      <Divider />
      {Boolean(members) && (
        <>
          {members?.map(({ name, username, id }: User) => {
            return (
              <>
                <Typography>{name}</Typography>
                <Typography>{username}</Typography>
                <Link onClick={() => push(`/Users/${id}`)}>
                  View User details
                </Link>
                <Divider />
              </>
            );
          })}
        </>
      )}
    </Stack>
  );
}

function AddressMap({ dummy }: DummyInterface) {
  const { geo, suite, members }: AddressInterface = useApptSuite({ dummy });
  const map = useMap();
  map.flyTo(geo as any, 12);
  return (
    <>
      <Marker position={geo as any}>
        <Popup>
          <Box>
            <Typography>{suite}</Typography>
            <Typography>{members?.length} Members</Typography>
          </Box>
        </Popup>
      </Marker>
    </>
  );
}
