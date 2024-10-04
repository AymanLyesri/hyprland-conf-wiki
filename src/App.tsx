// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello from "./components/Hello/Hello";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import WikiHeader from "./components/wiki/WikiHeader";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar /> {/* Sidebar will persist across all pages */}
        <div className="content">
          {/* <Navbar /> Navbar will persist on all pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
            <Route
              path="/installation"
              element={
                <WikiHeader filePath={"/assets/markdown/installation.md"} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
