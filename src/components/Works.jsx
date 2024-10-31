import React from "react";
import styles from "../style/Works.module.css";
import style from "../style/Portfolio.module.css";
function Works() {
  return (
    <div className={style.container}>
      <div className={style.gass2}>
        <div className={styles.container}>
          <p className={styles.title}>
            Made with <span>React Native</span>
          </p>
          <p className={styles.description}>
            A personal project developed with React, focused on finance
            management, organization, and a note-taking system. It combines key
            features like budget tracking, task management, and a digital
            notebook, offering a complete solution for personal productivity.
          </p>
          <button   onClick={() => window.open("https://growth-green.vercel.app", "_blank")}    className={styles.button}>Visit Project</button>
        </div>
        
      </div>
    </div>
  );
}

export default Works;
