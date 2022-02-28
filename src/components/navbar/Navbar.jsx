import React, { useState, useEffect } from "react";

import "./navbar.css";
const Navbar = () => {
  const executeScroll2 = (id) => {
    const anchor = document.querySelector(id);

    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div>
      <header className={`header ${!show && "header sticky"}`}>
        <ul>
          jump to ->
          <li>
            <h1
              className="jump-button"
              onClick={() => executeScroll2("#intro")}
            >
              .intro()
            </h1>
          </li>
          <li>
            <h1
              className="jump-button"
              style={{}}
              onClick={() => executeScroll2("#projects")}
            >
              .projects()
            </h1>
          </li>
          <li>
            <h1
              className="jump-button"
              style={{}}
              onClick={() => executeScroll2("#about")}
            >
              .about()
            </h1>
          </li>
          <li>
            <h1
              className="jump-button"
              onClick={() => executeScroll2("#contact")}
            >
              .contact()
            </h1>
          </li>
        </ul>
        {/* <a href="" className="logo">
          ND
        </a> */}
      </header>
    </div>
  );
};

export default Navbar;
