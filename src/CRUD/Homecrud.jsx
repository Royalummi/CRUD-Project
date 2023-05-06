import style from "./homecrud.module.css";
import {Link} from "react-router-dom";

const Homecrud = () => {
  return (
    <div>
      <section id={style.nav}>
        <Link to="/">CREATE-USERS</Link>
        <Link to="/users">USERS</Link>
      </section>
    </div>
  );
};

export default Homecrud;
