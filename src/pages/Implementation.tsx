import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useHistory, useParams } from "react-router-dom";
import * as filedata from "../data/filedata";

import Divider from "@mui/material/Divider";
import Treeview from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import Navigation from "./Navigation";
import useUsers from "../hooks/useUsers";

const implementationRouteOptions = [
  {
    path: "",
    children: <ImplementationOverview />,
    exact: true
  },
  {
    path: ":name",
    children: <ImplementationDetil />,
    exact: true
  }
];

export default function Implementation() {
  const { goBack } = useHistory();
  const { push } = useHistory();
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box>
          <Link onClick={goBack}>Go Back</Link>
          <Link onClick={() => push("/")} sx={{ ml: 2 }}>
            Home Page
          </Link>
        </Box>
        <ImplementationTree />
      </Grid>
      <Grid item xs>
        <Navigation options={implementationRouteOptions} />
      </Grid>
    </Grid>
  );
}

function ImplementationDetil() {
  const { name } = useParams() as any;
  const page = filedata["getPage"](name);
  return (
    <Stack spacing={2}>
      <Typography variant="h5">{page?.name}</Typography>
      <Typography variant="body1">{page?.desc}</Typography>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography>Component implementation.</Typography>
        <Divider />
        {page?.component}
      </Stack>
    </Stack>
  );
}

function ImplementationOverview() {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Typography>
          Each folder / file corresponds to its file in the project
        </Typography>
      </Box>
    </>
  );
}

function ImplementationTree() {
  useUsers({ effects: [] });
  return (
    <Treeview
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, overflow: "auto", height: 480, minWidth: 240 }}
    >
      {filedata["folders"].map((folder: any, index: number) => {
        return (
          <TreeItem label={folder?.name} nodeId={folder.name}>
            {folder.folders.map((f: any, idx: any) => renderFolder(f, idx))}
            {folder.files.map((f: any, idx: any) => renderFile(f, idx))}
          </TreeItem>
        );
      })}
    </Treeview>
  );
}

function renderFolder(folder: any, idx: number) {
  return (
    <>
      <TreeItem nodeId={folder.name} label={folder.name}>
        {folder.folders.map((f: any, idx: number) =>
          renderNestedFolder(f, idx)
        )}
        {folder.files.map((f: any, idx: number) => renderFile(f, idx))}
      </TreeItem>
    </>
  );
}

function renderNestedFolder(folder: any, idx: number) {
  return (
    <TreeItem nodeId={folder.name} label={folder.name}>
      {folder.files.map((f: any, idx: number) => renderFile(f, idx))}
    </TreeItem>
  );
}

function renderFile(file: any, idx: number) {
  const { push } = useHistory();
  return (
    <>
      <TreeItem
        nodeId={idx.toString()}
        label={file.name}
        onClick={() => push(`/Implementation/${file.name}`)}
      />
    </>
  );
}
