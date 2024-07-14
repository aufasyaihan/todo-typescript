import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      //disabled={!isFormValid}
      className="px-4 py-2 disabled:bg-gray-500 bg-gray-700 text-white rounded hover:bg-gray-800"
    >
      {props.children}
    </button>
  );
};

export default Button;
