import { ReactNode } from "react";

export type State = {
  users?: User[];
  posts?: Post[];
  loadingUsers?: boolean;
  loadingPosts?: boolean;
  postsArchive?: Post[];
};

export type User = {
  id: number;
  name: string;
  username: string;
  edited?: boolean;
  address: AddressInterface;
};

export type AddressInterface = {
  geo: Geo;
  suite: string;
  members?: User[];
};

type Geo = {
  lat: string;
  lng: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type NavOptions = {
  options?: RouteType[];
};

export type RouteType = {
  exact: boolean;
  path: string;
  children: ReactNode;
};

export type UseDataEffect = {
  effects: any[];
  dummy?:boolean
};

export type Params = {
  id: string;
  postId: string;
};

export type AxiosRequest = {
  method: "get" | "put";
  url: string;
  action: string;
  context: string;
  payload?: Post[] | User[] | User | Post;
  noloader?: boolean;
};

// Defaults a selection id for demos
export interface DummyInterface {
  dummy?: boolean;
}