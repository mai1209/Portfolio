import React from 'react'
import styles from "../style/Works.module.css";
import style from "../style/Portfolio.module.css";

function Works5() {
  return (
    <div className={style.container5}>
      <div className={style.gass2}>
        <div className={styles.container}>
          <p className={styles.title}>
            Made with <span>Javascript</span>
          </p>
          <p className={styles.description}>
          Here's a simple Todo List application in JavaScript that saves tasks to local storage and allows for data deletion. I'll provide the code along with improvements for readability and efficienc
          </p>
          <button  onClick={() => window.open("https://to-do-list-green-six.vercel.app", "_blank")} className={styles.button}>Visit Project</button>
        </div>
      </div>
    </div>
  )
}

export default Works5