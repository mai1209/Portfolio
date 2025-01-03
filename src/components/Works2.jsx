import React from "react";
import styles from "../style/Works.module.css";
import style from "../style/Portfolio.module.css";

function Works2() {
  return (
    <div className={style.container2}>
      <div className={style.gass2}>
        <div className={styles.container}>
          <p className={styles.title}>
            Made with <span>HTML & CSS</span>
          </p>
          <p className={styles.description}>
            A simple gym website built entirely with HTML and CSS, featuring sections
            like Home, About, Services, a map for location, and a contact form.
          </p>
          <button  onClick={() => window.open("https://trabajo4-nucba.vercel.app", "_blank")} className={styles.button}>Visit Project</button>
        </div>
      </div>
    </div>
  );
}

export default Works2;
