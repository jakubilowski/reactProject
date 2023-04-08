import { useState } from "react";
import "../components/styles/ChangeFontStyle.css";

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
    <div className="fontDiv">
      <span>Zmień rozmiar czcionki: </span>
      <p className="pclass">
        <i
          onClick={increaseFontSize}
          class="fa fa-plus-square"
          aria-hidden="true"
        ></i>
        <strong>/</strong>
        <i
          onClick={decreaseFontSize}
          class="fa fa-minus-square"
          aria-hidden="true"
        ></i>
      </p>
      <style>{styles}</style>
    </div>
  );
}

export default ChangeFontStyle;
