import React from "react";
import "./Sidebar.css";
import NrAlbumu from "../Album/NrAlbumu";
import { Link } from "react-router-dom";
import ChangeFontStyle from "../ChangeFontStyle";
import ChangeStyle from "../ChangeStyle";

function SideBar() {
  return (
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
          <Link to="/products">
            <i class="fa fa-list" aria-hidden="true"></i>Produkty
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fa fa-info-circle" aria-hidden="true"></i>O nas
          </Link>
        </li>
        <li>
          <Link to="/service">
            <i class="fa fa-laptop" aria-hidden="true"></i>Serwis
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i class="fa fa-phone-square" aria-hidden="true"></i>Kontakt
          </Link>
        </li>
      </ul>
      <ChangeStyle />
      <ChangeFontStyle />
    </div>
  );
}

export default SideBar;
