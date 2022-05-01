import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoaderComponent() {
  return (
    <Box sx={styles["container"]}>
      <CircularProgress />
    </Box>
  );
}

const styles = {
  container: {
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
