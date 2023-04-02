import { useState } from "react";

function ChangeStyle() {
  const [isBlackBg, setIsBlackBg] = useState(false);

  const handleClick = () => {
    setIsBlackBg(!isBlackBg);
  };

  const backgroundColor = isBlackBg ? "#000000" : "#e0e0eb";
  const fontColor = isBlackBg ? "#8080ff" : "#000000";

  const backgroundColor2 = isBlackBg ? "#404040" : "#ffffff";
  const fontColor2 = isBlackBg ? "#ffffff" : "#000000";

  const styles = `
  .myContainer {
      background-color: ${backgroundColor} !important;
      color: ${fontColor} !important;
    }

  .com-1-flex-item, .com-2-flex-item, .com-3-flex-item, .com-4-flex-item, 
  .com-5-flex-item, .header, .sidebar, .sidebar header, .sidebar ul a{
      background-color: ${backgroundColor2} !important;
      color: ${fontColor2} !important;
  }
  `;

  return (
    <div>
      <span>Zmień kolor: </span>
      <i onClick={handleClick} class="fa fa-moon-o" aria-hidden="true"></i>
      <style>{styles}</style>
    </div>
  );
}

export default ChangeStyle;
