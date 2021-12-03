import React from "react";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark sticky-header">
        <a className="navbar-brand" href="#">
          <img
            src={
              "https://media.istockphoto.com/vectors/auto-car-icon-vector-illustration-template-modern-sport-car-vector-vector-id1254556439"
            }
            width="30"
            height="30"
            className="d-inline-block align-top header-image"
            alt=""
          />
          Car Finder
        </a>
      </nav>
    </div>
  );
}

export default Header;
