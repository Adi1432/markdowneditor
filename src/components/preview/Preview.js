import React from "react";
import "./preview.css";
import ReactMarkdown from "react-markdown";
const Preview = ({ text }) => {
  return (
    <div className="preview" id="preview">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Preview;
