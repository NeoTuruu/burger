import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <NavLink exact={css.exact} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
