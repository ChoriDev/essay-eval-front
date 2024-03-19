import { Navbar } from "react-bootstrap";
import styles from "../css/Navbars.module.css";
import logoIcon from "../images/logoIcon.png";

function Navbars() {
  return (
    <Navbar className="bg-body-tertiary">
      <div className={styles.iconBox}>
        <Navbar.Brand href="/">
          <img className={styles.logoIcon} src={logoIcon} alt="로고 아이콘" />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}

export default Navbars;
