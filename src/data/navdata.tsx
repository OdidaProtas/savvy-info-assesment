// Lazy loading pages and components enabling code splitting with React.Suspense and React-router-dom
import { lazy, Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

// Using import syntax enables code splitting and loading only needed data;
const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));
const Address = lazy(() => import("../pages/Address"));
const Implementation = lazy(() => import("../pages/Implementation"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

import LoaderComponent from "../components/Loader";
// import components routes with supsense
const PostDetail = lazy(() => import("../components/PostsDetail"));
const PostList = lazy(() => import("../components/PostsLists"));
const UsersOverview = lazy(() => import("../components/UsersOverview"));
const UserDetail = lazy(() => import("../components/UserDetail"));
const UserForm = lazy(() => import("../components/UserForm"));

// Renders loader as component is fetched from server
function Sus({ children }: any) {
  return (
    <ErrorBoundary>
      <>
        <Suspense fallback={<LoaderComponent />}>{children}</Suspense>
      </>
    </ErrorBoundary>
  );
}
// Main navigation options
export const navOptions = [
  {
    path: "/",
    children: (
      <Sus>
        <Home />
      </Sus>
    ),
    exact: true
  },
  {
    path: "/Users",
    children: (
      <Sus>
        <Users />
      </Sus>
    ),
    exact: false
  },
  {
    path: "/Suite/:id",
    children: (
      <Sus>
        <Address />
      </Sus>
    ),
    exact: false
  },
  {
    path: "/Implementation",
    children: (
      <Sus>
        <Implementation />
      </Sus>
    ),
    exact: false
  },
  {
    path: "**",
    children: (
      <Sus>
        <PageNotFound />
      </Sus>
    ),
    exact: false
  }
];

export const postsRoutes = [
  {
    path: "",
    children: (
      <Sus>
        <PostList />
      </Sus>
    ),
    exact: true
  },
  {
    path: "Posts/:postId",
    exact: true,
    children: (
      <Sus>
        <PostDetail />
      </Sus>
    )
  }
];

// Nested routes in user component
export const userPageNavOptions = [
  {
    path: "",
    children: (
      <Sus>
        <UsersOverview />
      </Sus>
    ),
    exact: true
  },
  {
    path: ":id/edit",
    children: (
      <Sus>
        <UserForm />
      </Sus>
    ),
    exact: true
  },
  {
    path: ":id",
    children: (
      <Sus>
        <UserDetail />
      </Sus>
    ),
    exact: false
  },

  {
    path: "**",
    children: (
      <Sus>
        <PageNotFound />
      </Sus>
    ),
    exact: false
  }
];
