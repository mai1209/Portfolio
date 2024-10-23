import React from 'react'
import styles from "../style/Works.module.css";
import style from "../style/Portfolio.module.css";

function Works4() {
  return (
    <div className={style.container4}>
      <div className={style.gass2}>
        <div className={styles.container}>
          <p className={styles.title4}>
            Made with <span>Sass</span>
          </p>
          <p className={styles.description4}>
          This blog was built using Sass to improve the structure and maintainability of the CSS. With Sass, I implemented variables, nesting, and partials to keep the styles organized and efficient.
          </p>
          <button className={styles.button}>Visit Project</button>
        </div>
      </div>
    </div>
  )
}

export default Works4