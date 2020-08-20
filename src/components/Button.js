import React from "react";

const Button = ({ onClick, children, id }) => {
  return (
    <button
      aria-label="quiz answer option"
      className="button"
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
