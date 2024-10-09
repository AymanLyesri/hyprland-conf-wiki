// JsonDisplay.tsx
import React, { useEffect, useState, ReactNode } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm"; // Import the GFM plugin

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

  const headingWithId = (Tag: keyof JSX.IntrinsicElements) => {
    return ({ children, ...props }: { children?: React.ReactNode }) => (
      <Tag
        id={
          children
            ? children.toString().toLowerCase().replace(/\s+/g, "-")
            : undefined
        }
        {...props}>
        {children}
      </Tag>
    );
  };

  // Custom component for links
  const linkRenderer = ({
    href,
    children,
  }: {
    href?: string;
    children?: React.ReactNode;
  }) => {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link">
          {children}
        </a>
      );
    }

    // For internal links, just render normally
    return <a href={href}>{children}</a>;
  };

  // Custom components for rendering headings dynamically and links
  const components: Components = {
    h1: headingWithId("h1"),
    h2: headingWithId("h2"),
    h3: headingWithId("h3"),
    h4: headingWithId("h4"),
    h5: headingWithId("h5"),
    h6: headingWithId("h6"),
    a: linkRenderer, // Custom link component
  };
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default JsonDisplay;
