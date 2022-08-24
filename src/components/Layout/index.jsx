import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./Layout.css";

export const Layout = () => {
  const { userState } = useUserContext();
  const { login, avatar_url } = userState;

  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/", { replace: true });
    }
  }, [login, navigate]);

  const activeLinkstyles = {
    color: "blue",
    textDecoration: "underline",
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <header className="user-info">
          <div className="avatar">
            <img title={login || ""} alt={login || ""} src={avatar_url || ""} />
          </div>
        </header>
        <div className="links">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLinkstyles : null)}
                to="/terminals"
              >
                Terminals
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLinkstyles : null)}
                to="/buyers"
              >
                Buyers
              </NavLink>
            </li>
          </ul>
        </div>
        <footer>
          <p>Copyright © 2020</p>
        </footer>
      </nav>
      <main className="main">
        <Outlet context={{ avatar_url, login }} />
      </main>
    </div>
  );
};
