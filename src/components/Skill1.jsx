import React from "react";
import style from "../style/Home.module.css";

import { JackInTheBox } from "react-awesome-reveal";

function Skill1() {
  return (
    <div className={style.Body}>
      <div className={style.container}>
        <div className={style.link}>
          <a href="">Home</a>
          <a href="">Skills</a>
          <a href="#aboutMe">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={style.info}>
          <p>Maira Coria</p>
          <img className={style.mai} src="../../mai.jpeg" alt="mai" />
        </div>
      </div>
      <p className={style.title}>
        FullStack <span>multi-platform </span> developer
      </p>

      <div className={style.skills_container}>
        <div className={style.skills_row}>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../js.png" alt="tecnologia" />
            </JackInTheBox>

            <p>javaScript</p>
            <span> [ Advanced ] </span>
          </div>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../css.png" alt="tecnologia" />
            </JackInTheBox>

            <p>CSS</p>
            <span> [ Advanced ] </span>
          </div>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../sass.png" alt="tecnologia" />
            </JackInTheBox>

            <p>Sass</p>
            <span> [ Advanced ] </span>
          </div>
        </div>
        <div className={style.skills_column}>
          <JackInTheBox>
            <img
              className={style.native}
              src="../../react.png"
              alt="tecnologia"
            />
          </JackInTheBox>

          <p>React Native</p>
          <span> [ Intermediate ] </span>
        </div>
        <div className={style.skills_row}>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../reactNative.png" alt="tecnologia" />
            </JackInTheBox>

            <p>React.js</p>
            <span> [ Advanced ] </span>
          </div>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../html.png" alt="tecnologia" />
            </JackInTheBox>

            <p>HTML</p>
            <span> [ Advanced ] </span>
          </div>
          <div className={style.skills_column}>
            <JackInTheBox>
              <img src="../../next.png" alt="tecnologia" />
            </JackInTheBox>

            <p>Next.js</p>
            <span> [Beginner ] </span>
          </div>
        </div>
      </div>
      <div className={style.triangle}>
        {" "}
        <p className={style.about_me}>About Me</p>
      </div>
    </div>
  );
}

export default Skill1;
