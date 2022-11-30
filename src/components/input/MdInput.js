import React, { useRef, useEffect } from "react";
import "./mdinput.css";
const MdInput = ({ handleChange, text }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="input">
      <textarea ref={ref} type="text" onChange={handleChange} value={text} />
    </div>
  );
};

export default MdInput;
