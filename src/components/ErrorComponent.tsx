import Alert from "@mui/material/Alert";
export default function ErrorComponent() {
  return (
    <>
      <Alert severity="error" sx={{ my: 2 }}>
        An error occured while fetching data. Check your internet connection and
        try again.
      </Alert>
    </>
  );
}
