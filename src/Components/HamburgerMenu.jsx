import styles from "../Styles/HamburgerMenu.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { Link as ScrollLink } from "react-scroll";
let HamburgerMenu = ({ showMobileMenu }) => {
  return (
    <div
      className={`${styles.hamburger} ${
        showMobileMenu ? styles.showHamburger : null
      }`}
    >
      <div
        className={`${styles.containerHamburger} ${
          showMobileMenu ? styles.showLinks : null
        }`}
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          HOME
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          ABOUT US
        </ScrollLink>
        <ScrollLink to="whychooseus" smooth={true} duration={500}>
          WHY CHOOSE US
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          CONTACT US
        </ScrollLink>
      </div>
    </div>
  );
};

export default HamburgerMenu;
