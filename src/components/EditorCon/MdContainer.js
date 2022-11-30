import React, { useState } from "react";
import MdInput from "../input/MdInput";
import Preview from "../preview/Preview";
import "./mdcon.css";
const MdContainer = () => {
  const [text, setText] = useState("Welcome");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="MdCon">
      <MdInput handleChange={handleChange} text={text} />
      <Preview text={text} />
    </div>
  );
};

export default MdContainer;
