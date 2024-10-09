import React, { useEffect, useState } from "react";

import "./Sidebar.scss";

interface Heading {
  text: string;
  id: string;
  level: number;
  children?: Heading[];
}

interface JsonDisplayProps {
  filePath: string;
}

const JsonDisplay: React.FC<JsonDisplayProps> = ({ filePath }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        extractHeadings(text);
      })
      .catch((error) => {
        console.error("Error loading markdown file:", error);
        setError(error.message); // Set error message
      });
  }, [filePath]);

  const extractHeadings = (text: string) => {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const extractedHeadings: Heading[] = [];
    const headingStack: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(text)) !== null) {
      const level = match[1].length;
      const headingText = match[2];
      const id = headingText.replace(/\s+/g, "-").toLowerCase();

      const heading: Heading = { text: headingText, id, level, children: [] };

      while (
        headingStack.length &&
        headingStack[headingStack.length - 1].level >= level
      ) {
        headingStack.pop();
      }

      if (headingStack.length) {
        headingStack[headingStack.length - 1].children?.push(heading);
      } else {
        extractedHeadings.push(heading);
      }

      headingStack.push(heading);
    }

    setHeadings(extractedHeadings);
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((section) => section !== id)
        : [...prev, id]
    );
  };

  const isSectionOpen = (id: string) => openSections.includes(id);

  return (
    <aside className="sidebar">
      <div className="header">
        <h2>Wiki</h2>
        <h6>Hyprland-conf by AymanLyesri</h6>
      </div>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <div>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  toggleSection(heading.id);
                }}>
                {heading.text}
              </a>
              {isSectionOpen(heading.id) &&
                heading.children &&
                heading.children.length > 0 && (
                  <ul
                    style={{
                      paddingLeft: "20px",
                      listStyleType: "circle",
                    }}>
                    {heading.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className="secondary-link"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(child.id);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}>
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default JsonDisplay;
