import React from "react";
import "./styles.scss";
import { useController } from "react-hook-form";

function Input(props) {
  const { title, src, type, placeholder, required } = props;
  const { field } = useController(props);
  return (
    <div className="input-container">
      <div className="text-input">{title}</div>
      <div className="input-border">
        {src && <img src={src} alt="img" />}
        <input
          {...field}
          className="input-styles"
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}

export default Input;
