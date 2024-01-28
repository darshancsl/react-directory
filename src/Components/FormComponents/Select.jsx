import React from "react";

const Select = ({ options, data, setData, name }) => {
  const onChange = (value) => {
    setData({ ...data, [name]: value });
  };
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options?.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
