import React from "react";

const Button = ({ text, type }) => {
  return (
    <button type={type} className='btn-default w-100 m-0 mb-4'>
      {text}
    </button>
  );
};

export default Button;
