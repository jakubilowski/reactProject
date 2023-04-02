import React from "react";
import "./Sidebar.css";
import NrAlbumu from "../Album/NrAlbumu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../../pages/About";

function SideBar() {
  return (
    <Router>
      <div class="sidebar">
        <header>
          <p>
            Jakub Iłowski <NrAlbumu nrAlbumu="64258" />
          </p>
        </header>
        <ul>
          <li>
            <Link to="/">
              <i class="fa fa-home" aria-hidden="true"></i>Strona główna
            </Link>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-list" aria-hidden="true"></i>Produkty
            </a>
          </li>
          <li>
            <Link to="/about">
              <i class="fa fa-info-circle" aria-hidden="true"></i>O nas
            </Link>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-laptop" aria-hidden="true"></i>Serwis
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-phone-square" aria-hidden="true"></i>Kontakt
            </a>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default SideBar;
