// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Button.module.css";

const Button = ({ variant, children, onClick }) => {
  const className = [];

  if (variant === "primary") {
    className.push(style.primary);
  }
  if (variant === "secon") {
    className.push(style.secon);
  }

  return (
    <button onClick={onClick} className={className.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
