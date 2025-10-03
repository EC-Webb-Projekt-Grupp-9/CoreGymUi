import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ADDRESS } from "../../assets/js/config";
import "./hamburger.css";

export default function Hamburger() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const collapseRef = useRef(null); // referens till collapse-diven

  useEffect(() => {
    fetch(`${ADDRESS}/api/auth/pingauth`, { credentials: "include" })
      .then(res => setIsLoggedIn(res.ok))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${ADDRESS}/api/auth/signout`, { method: "GET", credentials: "include" });
      setIsLoggedIn(false);
      closeMenu(); // stäng menyn
      navigate("/");
    } catch (error) {
      console.error("Fel vid utloggning:", error);
    }
  };

  const closeMenu = () => {
    if (collapseRef.current) {
      collapseRef.current.classList.remove("show"); // ta bort show-klassen
    }
  };

  const handleLogin = () => {
    closeMenu();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02" ref={collapseRef}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-links" onClick={closeMenu}>Startsida</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/booking"} className="nav-links" onClick={closeMenu}>Boka Pass</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/admin"} className="nav-links" onClick={closeMenu}>Admin</NavLink>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink to={"/minapass"} className="nav-links" onClick={closeMenu}>Mina Pass</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/minauppgifter"} className="nav-links" onClick={closeMenu}>Mina Uppgifter</NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              {isLoggedIn ? (
                <button className="btn btn-link nav-links" id="btn-logout" onClick={handleLogout}>
                  Logga ut
                </button>
              ) : (
                <button className="btn btn-link nav-links" id="btn-login" onClick={handleLogin}>
                  Logga in
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
