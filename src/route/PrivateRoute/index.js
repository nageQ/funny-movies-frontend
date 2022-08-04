import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "components/Layout";
function PrivateRoute(props) {
  const { component: ChildrenAdminComponent, ...remainProps } = props;
  return (
    <>
      <Route
        exact
        {...remainProps}
        render={(routeProps) =>
          localStorage.getItem("TOKEN") ? (
            <Layout>
              <ChildrenAdminComponent {...routeProps} />
            </Layout>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    </>
  );
}

export default React.memo(PrivateRoute);
