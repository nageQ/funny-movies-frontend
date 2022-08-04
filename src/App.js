import React from "react";
import { Switch } from "react-router-dom";
import { appRoutes } from "contants/AppRoute";
import { privateRoute } from "contants/PrivateRoute";
import DefaultLayoutRoute from "route/DefaulRoute";
import PrivateRoute from "route/PrivateRoute";
import NotFoundRoute from "route/NotFoundRoute";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  const renderDefaultRoutes = () => {
    const xhtml = appRoutes.map((route) => (
      <DefaultLayoutRoute
        exact={true}
        path={route.path}
        component={route.component}
        key={route.path}
      />
    ));
    return xhtml;
  };

  const renderAdminRoutes = () => {
    const xhtml = privateRoute.map((route) => (
      <PrivateRoute
        exact={true}
        path={route.path}
        component={route.component}
        key={route.path}
      />
    ));
    return xhtml;
  };

  const renderNotFoundRoute = () => <NotFoundRoute />;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <Switch>
          {renderDefaultRoutes()}
          {renderAdminRoutes()}
          {renderNotFoundRoute()}
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
