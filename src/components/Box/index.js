import React from "react";
import "./styles.scss";
function BoxContainer(props) {
  const { children } = props;
  return <div className="box-styles">{children}</div>;
}

export default BoxContainer;
