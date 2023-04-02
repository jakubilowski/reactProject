import React from "react";
import "./Search.css";

function Search() {
  return (
    <div>
      <input className="moja" type="text" placeholder="Search.." />
      <button class="btn btn-light mb-1">Wyszukaj</button>
      <img className="picClass" src="3135715.jpeg" alt="Italian Trulli"></img>
      <i class="myclass2 fa fa-cog fa-2x"></i>
    </div>
  );
}

export default Search;
