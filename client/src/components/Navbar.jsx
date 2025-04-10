import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const { cart } = useSelector((state) => state);

  return (
    <div className="allitem">
      <nav>
        <div className=" nav-div1">
          <NavLink to="/chatbot">
            <h3>
              <img src="/image/chatgpt.png" width="40rem" />
            </h3>
          </NavLink>

          <NavLink to="/home">
            <h3>MyStore</h3>
          </NavLink>
        </div>

        <div className="nav-div2">
          <div className="latest">
            <NavLink to="/cart">
              <div className="cart-icon">
                <FaShoppingCart className="carti" />
                {cart.length > 0 && (
                  <span className="cart-number">{cart.length}</span>
                )}
              </div>
            </NavLink>
          </div>

          <div className="nav-div2-inner">
            {!isLoggedIn ? (
              <NavLink to="/">
                <button onClick={handleLogin}>
                  <h3>Register</h3>
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button onClick={handleLogout}>
                  <h3>Logout</h3>
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
