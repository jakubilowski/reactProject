import React from "react";
import Search from "../Search/Search";
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
import Component3 from "../Component3/Component3";
import Component4 from "../Component4/Component4";
import Component5 from "../Component5/Component5";

function Home() {
  return (
    <div class="myContainer">
      <div class="content">
        <ul class="flex-container">
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <div>
            <Component5 />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Home;
