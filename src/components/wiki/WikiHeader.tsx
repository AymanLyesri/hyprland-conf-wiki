// JsonDisplay.tsx
import React from "react";

interface JsonItem {
  title: string;
  content: string;
}

interface JsonDisplayProps {
  data: JsonItem[]; // Accept an array of items
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ data }) => {
  return (
    <div className="json-display">
      {data.map((item, index) => (
        <div key={index} className="json-item">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default JsonDisplay;
