import React from "react";
import Header from "components/Header";
import "./styles.scss";
function Layout(props) {
  const { children } = props;
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-inside">{children}</div>
    </div>
  );
}

export default Layout;
