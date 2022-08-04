import React from "react";
import "./styles.scss";
function BoxContainer(props) {
  const { name, type } = props;

  return (
    <button
      className={`btn ${type === "outline" ? "btn-outline" : "button-styles"}`}
    >
      {name}
    </button>
  );
}

export default BoxContainer;
