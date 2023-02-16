import React from "react";
import DropdownMenu from "./DropdownMenu"

function Header() {
  return (
    <header>
      <div className="headerContainer col-lg-3">
          <div className="headChild">
          <DropdownMenu />
          </div>
          <div className="headChild">
            <h1 className="head">Duratuff</h1>
          </div>
          <div className="headChild">
            <a className="quote" href="facebook.com">
              <h2 className="quote">Get A Quote!</h2>
            </a>
          </div>
      </div>
    </header>
  );
};
export default Header;
