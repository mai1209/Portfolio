import React from 'react'
import styles from "../style/Works.module.css";
import style from "../style/Portfolio.module.css";

function Works3() {
  return (
    <div className={style.container3}>
      <div className={style.gass2}>
        <div className={styles.container}>
          <p className={styles.title}>
            Made with <span>Javascript</span>
          </p>
          <p className={styles.description}>
          A registration and login page built with JavaScript. It includes form validation, password protection, and basic user authentication. This project lays the groundwork for more advanced features like database integration.
          </p>
          <button  onClick={() => window.open("https://sesion-ten.vercel.app", "_blank")} className={styles.button}>Visit Project</button>
        </div>
      </div>
    </div>
  )
}

export default Works3