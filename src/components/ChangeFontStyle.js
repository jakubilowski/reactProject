import { useState } from "react";

function ChangeFontStyle() {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  const styles = `
    *,
    *::before,
    *::after {
      font-size: ${fontSize}px !important;
    }
  `;

  return (
    <div>
        <span>Zmień rozmiar czcionki: </span>
      <i onClick={increaseFontSize} class="fa fa-plus-square" aria-hidden="true"></i>
      /
      <i onClick={decreaseFontSize} class="fa fa-minus-square" aria-hidden="true"></i>
      <style>{styles}</style>
    </div>
  );
}

export default ChangeFontStyle;