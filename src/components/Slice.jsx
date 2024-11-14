import React, { useState } from "react";
import style from "../style/Slice.module.css";
import { data } from "./data";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Slider() {
  const [index, setIndex] = useState(0);

  const Next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };
  const Prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const Component = data[index].component;
  console.log(Component);
  return (
   <div className={style.Body}>
     <div className={style.container}>
      <div key={data[index].id} className={style.slider}>
        <Component />
      </div>

      <div className={style.buttons}>
        <button onClick={Prev}>   <MdArrowBackIos className={style.icon} /></button>
        <button onClick={Next}> <MdArrowForwardIos className={style.icon}  /></button>
      </div>
    </div>
   </div>
  );
}

export default Slider;
