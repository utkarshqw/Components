import styles from "./Navbar.module.css";
import React from "react";
import { useState } from "react";

function Navbar() {

    const [active, setActive ] = useState(false)
  



  

  return (
    <>
      <nav>
        <div className={styles.logo}>
          <h4>The Nav</h4>
        </div>

        <ul  className={active ? styles.navactive:styles.navlinks}>
          <li >
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>

        <div onClick={()=>setActive(!active)} className={styles.burger}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
