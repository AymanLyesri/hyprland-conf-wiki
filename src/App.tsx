// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import WikiHeader from "./components/wiki/WikiHeader";
import MarkdownSidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        {/* <Sidebar /> Sidebar will persist across all pages */}
        <MarkdownSidebar
          filePath={
            "https://raw.githubusercontent.com/AymanLyesri/hyprland-conf/refs/heads/dev/README.md"
          }
        />
        <div className="content">
          {/* <Navbar /> Navbar will persist on all pages */}
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> */}
            <Route
              path="/"
              element={
                <WikiHeader
                  filePath={
                    "https://raw.githubusercontent.com/AymanLyesri/hyprland-conf/refs/heads/dev/README.md"
                  }
                />
              }
            />
            <Route
              path="/home"
              element={
                <WikiHeader
                  filePath={
                    "https://raw.githubusercontent.com/AymanLyesri/hyprland-conf/refs/heads/dev/README.md"
                  }
                />
              }
            />
            <Route
              path="/packages"
              element={<WikiHeader filePath={"/assets/markdown/pkglist.md"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
