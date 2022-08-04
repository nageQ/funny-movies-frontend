import * as React from "react";
import { Route, Redirect } from "react-router-dom";

function DefaultRoute(props) {
  const { component: ChildrenDefaultComponent, ...otherProps } = props;
  return (
    <Route
      exact
      {...otherProps}
      render={(routeProps) =>
        !localStorage.getItem("TOKEN") ? (
          <ChildrenDefaultComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default React.memo(DefaultRoute);
