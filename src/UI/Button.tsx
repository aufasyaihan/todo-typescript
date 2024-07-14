import React from "react";

const Button: React.FC<
  { color: string } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button
      {...props}
      //disabled={!isFormValid}
      className={`px-4 py-2 disabled:bg-gray-500 rounded ${props.color}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
