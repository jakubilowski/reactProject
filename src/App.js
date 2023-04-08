import "./App.css";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import Service from "./components/pages/service";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div class="myContainer">
        <div className="sidebar">
          <SideBar />
        </div>
        <div class="header">
          <Search />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
