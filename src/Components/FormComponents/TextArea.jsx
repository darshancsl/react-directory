import React from "react";

const TextArea = ({ name, placeHolder, value, data, setData }) => {
  const onChange = (val) => {
    setData({ ...data, [name]: val });
  };

  return (
    <div>
      <textarea
        placeholder={placeHolder}
        value={value.content}
        rows={5}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
