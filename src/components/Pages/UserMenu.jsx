import { useState, useEffect } from "react";
import { ADDRESS } from "../../assets/js/config";
import './UserMenu.css';
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const checkAuth = async () => {
    try {
      const res = await fetch(`${ADDRESS}/api/auth/pingauth`, {
        credentials: "include",
      });
      setIsLoggedIn(res.ok);
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${ADDRESS}/api/auth/signout`, {
        method: "GET",
        credentials: "include",
      });
      setIsLoggedIn(false);
      navigate("/"); 
    } catch (error) {
      console.error("Fel vid utloggning:", error);
    }
  };

  return (
    <div className="d-flex justify-content-end pe-3 position-relative ms-auto" >
      {isLoggedIn ? (
        <>
          <i 
            className="bi bi-person-circle text-primary ms-auto" id="popup"
            style={{ fontSize: '2.2rem', cursor: 'pointer' }}
            onClick={() => setShowDropdown(!showDropdown)}
          ></i>

          {showDropdown && (
            <div 
              className="profile-dropdown position-absolute end-0 mt-2"
              style={{ minWidth: '150px', zIndex: 1000 }}
            >
              <div className="links">
                <NavLink to={"/minauppgifter"} className="link">Mina Uppgifter</NavLink>
                <NavLink to={"/minapass"} className="link">Mina Pass</NavLink>
              </div>

              <button 
                className="btn logout-btn w-100 mt-2" 
                onClick={handleLogout}
              >
                Logga ut
              </button>
            </div>
          )}
        </>
      ) : (
        <button 
          className="btn " id="login-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Logga in
        </button>
      )}
    </div>
  );
}
