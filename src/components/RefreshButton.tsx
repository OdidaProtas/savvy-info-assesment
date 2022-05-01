import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function RefreshButton({ refresh }: any) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Button disableElevation variant="contained" onClick={refresh}>
        Retry
      </Button>
    </Box>
  );
}
