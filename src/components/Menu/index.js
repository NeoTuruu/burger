import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
      <MenuItem link="/login">НЭВТРЭХ</MenuItem>
      <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
    </ul>
  </div>
);

export default Menu;
