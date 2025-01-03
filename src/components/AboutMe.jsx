import React from "react";
import style from "../style/AboutMe.module.css";

function AboutMe() {
  return (
    <div id="aboutMe" className={style.Body}>
    
      <div className={style.container}>
     
    
        <div className={style.textContainer}>
          <h2 className={style.title}>
            Know me <span>more</span>
          </h2>
          <p className={style.text}>
            I'm Maira Coria, a Full Stack Developer from Santa Fe (Capital),
            Argentina. At 28 years old, I’m ready to take the next step in my
            web development career. I’m passionate about learning and embracing
            new challenges, and I take pride in my responsibility and
            dedication. I’m seeking opportunities to apply my Full Stack skills
            in innovative projects that make a difference. Additionally, I have
            an intermediate level of English, which allows me to collaborate
            effectively in diverse and multicultural environments.
          </p>
        </div>
       
      </div>
  
    </div>
  );
}

export default AboutMe;
