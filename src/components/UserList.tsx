import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import { useHistory, useRouteMatch } from "react-router-dom";
import { useStateValue } from "../data/Store";
import { User } from "../types";

export default function UserList() {
  const { users } = useStateValue();
  const { url } = useRouteMatch();
  const { push } = useHistory();

  const [selected, setSelected] = React.useState(null);

  return (
    <Paper sx={styles["root"]}>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          maxHeight: 490,
          overflow: "auto"
        }}
      >
        {users.map(({ id, name, username, edited }: User) => (
          <ListItem
            selected={id === selected}
            onClick={() => {
              setSelected(id as any);
              push(`${url}/${id}`);
            }}
            key={id}
            alignItems="flex-start"
            secondaryAction={
              edited ? <Chip label={"edited"} color="primary" /> : null
            }
          >
            <ListItemAvatar>
              <Avatar alt={name} />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`ID ${id}`}
                  </Typography>
                  {` — ${username}`}
                </React.Fragment>
              }
            />
            <Divider />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

const styles = {
  root: {
    p: 2
  }
};
