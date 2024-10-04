// JsonDisplay.tsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface JsonDisplayProps {
  filePath: string;
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ filePath }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Fetch the markdown file content
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading markdown file:", error));
  }, [filePath]);

  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default JsonDisplay;
