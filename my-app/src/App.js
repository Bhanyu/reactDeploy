import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About"
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="about" element={<About />} />
  
        </Route>
      </Routes>
    </>
  );
}
