import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Box sx={styles["root"]}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={styles["heading"]}>
          Savannah Informatics React.js interview assesment
        </Typography>
        <Typography>
          Submission by: <MuiLink href="https://github.com/OdidaProtas" className="author">Brian Odida</MuiLink>
        </Typography>
        <Divider />
        <Stack spacing={2}>
          <Link to={"/Users"}>Users</Link>
          <Link to={"/Implementation"}>Implementation Guide</Link>
          <MuiLink
            target="blank"
            href="https://github.com/OdidaProtas/savvy-info-assesment"
          >
            Code Repository
          </MuiLink>
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
}

const styles = {
  root: {
    height: "72vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  heading: {
    mb: 2
  },
  date: {
    my: 2,
    color: "text.secondary"
  }
};
