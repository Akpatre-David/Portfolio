import React, { useState } from "react";
import style from "./style.module.css";
import menuIcon from "../../images/menu-burger.svg"; // your hamburger image

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className={style.logo}>shane</div>

        <img
          src={menuIcon}
          alt="Menu"
          className={style.navbarToggle}
          onClick={() => setIsOpen(true)}
        />

        <ul className={style.navbarLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className={style.activeLink}>
              About
            </a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className={style.buyNow}>
              BUY NOW
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className={style.mobileMenu}>
          <div className={style.closeButton} onClick={() => setIsOpen(false)}>
            close —
          </div>
          <ul className={style.mobileLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" className={style.buyNow}>
                BUY NOW
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
