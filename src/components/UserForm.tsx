import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useParams, useHistory } from "react-router-dom";
import { useStateItem } from "../data/store";
import { useState, useEffect, FormEvent } from "react";

import { DummyInterface, Params, User } from "../types";
import useRequest from "../hooks/useRequest";

export default function UserForm({ dummy }: DummyInterface) {
  const { push, goBack } = useHistory();
  const { id } = useParams() as Params;
  const item = useStateItem("users", dummy ? "1" : id);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({ name: "", username: "" });

  const request = useRequest();

  async function handleSubmit(e: FormEvent) {
    setError(false);
    setLoading(true);
    e.preventDefault();

    const [, err] = await request({
      method: "put",
      url: `/users/${id}`,
      action: "UPDATE_ENTRY",
      payload: { ...state } as User,
      context: "users",
      noloader: true
    });

    if (err) {
      setError(true);
      setLoading(false);
      return;
    }
    setLoading(false);
    setSuccess(true);
    setTimeout(() => push(`/Users/${id}`), 1000);
  }

  useEffect(() => {
    // sets the current active item to state as default values
    setState(() => ({ ...item }));
  }, [item]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Link onClick={goBack}>Go Back</Link>
        <Typography variant="h6">Edit Profile</Typography>
        {success && (
          <>
            <Alert sx={{ mb: 2 }} severity="success">
              Success. Username has been updated.
            </Alert>
          </>
        )}
        {error && (
          <>
            <Alert sx={{ mb: 2 }} severity="error">
              Error. Could not complete request. Please try again.
            </Alert>
          </>
        )}
        <TextField
          onChange={(e) => setState({ ...state, name: e.target.value })}
          fullWidth
          required
          value={state?.name}
          label="Name"
          placeholder="Type a new name"
        />
        <TextField
          onChange={(e) => setState({ ...state, username: e.target.value })}
          fullWidth
          required
          value={state?.username}
          label="Username"
          placeholder="Type a new username"
        />
        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={styles["submitBtn"]}
          type={loading ? "button" : "submit"}
          color={loading ? "warning" : "info"}
        >
          {loading ? "Submitting... " : "Save Changes"}
        </Button>
      </Stack>
    </form>
  );
}

const styles = {
  submitBtn: {
    mt: 2
  }
};
