import React from 'react';
import './Sidebar.css';
import NrAlbumu from '../Album/NrAlbumu';

function SideBar(){
    return (
        <div class="sidebar">
        <header>
            <p>Jakub Iłowski <NrAlbumu nrAlbumu = "64258" /></p>
            </header>
        <ul>
         <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i>Strona główna</a></li>
         <li><a href="#"><i class="fa fa-list" aria-hidden="true"></i>Produkty</a></li>
         <li><a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i>O nas</a></li>
         <li><a href="#"><i class="fa fa-laptop" aria-hidden="true"></i>Serwis</a></li>
         <li><a href="#"><i class="fa fa-phone-square" aria-hidden="true"></i>Kontakt</a></li>
        </ul>
       </div>
       )
}

export default SideBar;