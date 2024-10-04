// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import WikiHeader from "./components/wiki/WikiHeader";

const jsonData = [
  {
    title: "First Title",
    content: "This is the content for the first item.",
  },
  {
    title: "Second Title",
    content: "This is the content for the second item.",
  },
  {
    title: "Third Title",
    content: "This is the content for the third item.",
  },
];

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
              element={<WikiHeader data={jsonData} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
