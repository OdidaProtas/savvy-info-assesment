import { Switch, Route, useRouteMatch } from "react-router-dom";

// Default navigation options
import { navOptions } from "../data/navdata";
import { NavOptions, RouteType } from "../types";

export default function Navigation({ options }: NavOptions) {
  const { path } = useRouteMatch();
  //   Map child routes to the path of parent component
  const asChild = (route: RouteType) => ({
    ...route,
    path: `${path}/${route.path}`
  });
  // Uses options for data if implemented in a nested page
  const data: RouteType[] = options?.map(asChild) || navOptions;
  return (
    <Switch>
      {data.map(({ path, children, exact }, idx: number) => (
        <Route key={idx} path={path} exact={exact}>
          {children as any}
        </Route>
      ))}
    </Switch>
  );
}
