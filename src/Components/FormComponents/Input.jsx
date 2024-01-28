import React from "react";

const Input = ({ type, name, placeHolder, value, data, setData }) => {
  const onChange = (value) => {
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
