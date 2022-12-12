import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

function Nav({ path }) {
  return (
    <nav className={s.nav} style={path === "/" ? { display: "none" } : null}>
      <ul>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
