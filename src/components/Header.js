import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      {/* we can get the current state value by passing an arrow function */}
      <button
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
