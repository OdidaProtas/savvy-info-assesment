import ErrorBoundary from "../components/ErrorBoundary";
import ErrorComponent from "../components/ErrorComponent";
import LoaderComponent from "../components/Loader";
import Map from "../components/Map";
import PostDetail from "../components/PostsDetail";
import RefreshButton from "../components/RefreshButton";
import UserDetail from "../components/UserDetail";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserPosts from "../components/UserPosts";
import UsersOverview from "../components/UsersOverview";
import Address from "../pages/Address";
import Home from "../pages/Home";
import Implementation from "../pages/Implementation";
import PageNotFound from "../pages/PageNotFound";
import Users from "../pages/Users";
import { useStateValue } from "./store";

export var components = {
  name: "components",
  desc: "Reusable components that together builds pages, ie. in ../pages/Users",
  folders: [],
  files: [
    {
      name: "ErrorBoundary",
      desc: "Catches errors on different parts of the component tree, and isolating the component to ensure it doesn't crash the whole application. Implemented with code splitting and nested routes",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "ErrorComponent",
      desc: "Displays an error message if network request fails.",
      url: "",
      componnet: <ErrorComponent />
    },
    {
      name: "Loader",
      desc: "Material ui circular Progress bar that is displayed when fetching data, and during lazy loading of components in suspense mode",
      url: "",
      component: (
        <ErrorBoundary>
          <LoaderComponent />
        </ErrorBoundary>
      )
    },
    {
      name: "Map",
      desc: "Leaflet Map container for display Suite's location component",
      url: "",
      component: (
        <ErrorBoundary>
          <Map className="smallMap"></Map>
        </ErrorBoundary>
      )
    },
    {
      name: "PostsDetail",
      desc: "Displays a single post item",
      url: "",
      component: (
        <ErrorBoundary>
          <PostDetail dummy />
        </ErrorBoundary>
      )
    },
    {
      name: "PostsList",
      desc: "Displays a Grid-List of Posts",
      url: "",
      component: (
        <ErrorBoundary>
          <UserPosts dummy />
        </ErrorBoundary>
      )
    },
    {
      name: "RefreshButton",
      desc: "Takes an action prop to retry a network request, automatically or manually. You can test for this by turning off the internet connection",
      url: "",
      component: (
        <ErrorBoundary>
          <RefreshButton />
        </ErrorBoundary>
      )
    },
    {
      name: "UserDetail",
      desc: "Displays a single user profile, address and posts",
      url: "",
      component: (
        <ErrorBoundary>
          <UserDetail dummy />
        </ErrorBoundary>
      )
    },
    {
      name: "UserForm",
      desc: "Renders a form to update user's name and username",
      url: "",
      component: (
        <ErrorBoundary>
          <UserForm dummy />
        </ErrorBoundary>
      )
    },
    {
      name: "UserList",
      desc: "Renders a list of users",
      url: "",
      component: (
        <ErrorBoundary>
          <UserList />
        </ErrorBoundary>
      )
    },
    {
      name: "UserPosts",
      desc: "Renders users posts lists, and post details as nested routes",
      url: "",
      component: (
        <ErrorBoundary>
          <UserList />
        </ErrorBoundary>
      )
    },
    {
      name: "UsersOverview",
      desc: "Renders the number of users if none is selected",
      url: "",
      components: (
        <ErrorBoundary>
          <UsersOverview />
        </ErrorBoundary>
      )
    }
  ]
};

export var data = {
  name: "data",
  folders: [],
  files: [
    {
      name: "axiosInstance",
      desc: "Configures all axios properties to ie adding base url, request timeout",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "navdata",
      desc: "Provides an array of suspended renders to navigation component",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "store",
      desc: "Creates a store with React's context api for a global state management. The state is based on React's useReducer hook that enables redux patterns with the provided reducer.   Additionally, store adds useStateValue hook to return the entire state object, a useItem hook to return an item in an array in the store, and useDispatch hook to dispatch reducer actions and data ",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    }
  ]
};

export var hooks = {
  name: "hooks",
  folders: [],
  files: [
    {
      name: "usePostList",
      desc: "Searches for existing users's post is a global state based dummy posts cache, then adds them as current active posts, or makes a request using the useRequest hook to retrieve data from the server and add to the global state. The dummy cache is to prevent multiple network requests of the same data",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "useRequest",
      desc: "Makes a network request to the data server with a given method, data endpoint and an optional payload, and performs the action requested, ie adding to the global context api state.",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "useSuite",
      desc: "Gets a user's suite and the number of users living there",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "useUsers",
      desc: "Makes a request with the useRequest hook, to the users data server to be retrieved and added to the context API state.",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    }
  ]
};

export var pages = {
  name: "pages",
  folders: [],
  files: [
    {
      name: "Address",
      desc: "Renders a map with the marker to the Suite Location, Suite details and a list of people living in the suite",
      url: "",
      component: (
        <ErrorBoundary>
          <Address dummy />
        </ErrorBoundary>
      )
    },
    {
      name: "Home",
      desc: "Renders the apps landing page, with links to the users page and implementation page",
      url: "",
      component: (
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      )
    },
    {
      name: "Implementation",
      desc: "Adds guide / documentation to application files.",
      url: "",
      component: (
        <ErrorBoundary>
          <Implementation />
        </ErrorBoundary>
      )
    },
    {
      name: "Navigation",
      desc: "Integrates code splitting, error boundaries as it renders default page navigation options, or provides options for nested navigation",
      url: "",
      component: (
        <ErrorBoundary>
          <></>
        </ErrorBoundary>
      )
    },
    {
      name: "PageNotFound",
      desc: "Displays a four 0 four request if the user visits an unmatched url",
      url: "",
      component: <PageNotFound />
    },
    {
      name: "Users",
      desc: "Renders users list and overview, and a user's detail and post if a user is selected.",
      url: "",
      component: (
        <>
          <UserComponent />
        </>
      )
    }
  ]
};

export var tests = {
  name: "tests",
  folders: [],
  files: []
};

export var srcFiles: any = [
  {
    name: "App",
    desc: "Adds a mui Toolbar and container to add padding to the application. The component renders Navigation component with default routes for page navigatiom",
    url: "",
    component: (
      <ErrorBoundary>
        <></>
      </ErrorBoundary>
    )
  },
  {
    name: "index",
    desc: "Adds a routing provider with react-router-dom, and a store for global state management at the root of the application.",
    url: "",
    component: (
      <ErrorBoundary>
        <></>
      </ErrorBoundary>
    )
  },
  {
    name: "types",
    desc: "Provides type definitions for various properties, ie User, Address, Post",
    url: "",
    component: (
      <ErrorBoundary>
        <></>
      </ErrorBoundary>
    )
  }
];

function UserComponent() {
  const state = useStateValue();
  if (Boolean(state?.users)) return <Users />;
  return <></>;
}

export const folders: any = [
  {
    name: "React Project",
    desc: "Project root directory. All folders / files corresponds to actual project files.",
    folders: [
      {
        name: "src",
        desc: "Source directory with project implementation",
        folders: [pages, components, data, hooks, tests],
        files: srcFiles
      }
    ],
    files: []
  }
];

export function getAllPages() {
  return components.files
    .concat(data.files)
    .concat(hooks.files)
    .concat(pages.files)
    .concat(tests.files)
    .concat(srcFiles.files)
    .concat(folders.files);
}

export function getPage(name: string): any {
  return (getAllPages() || []).filter((page) => page?.name === name)[0];
}



export function getTech(){
  return [
    {name:"Vite", desc:"Replaces webpack and react scripts for faster and better development experience"},
    {name:"Material UI", desc:"Building basic UI Layout with MUI components "},
    {name:"React router dom", desc:"Handles Application navigation and enables code splitting with react lazy and Suspense  "},
    {name:"React Leaflet / Leaflet", desc:"Displays a map and a marker with the user's address"},
    {name:"Material UI", desc:"Building basic UI Layout with MUI components "}

  ]
}