import React, { useState } from "react";
import style from "../style/Portfolio.module.css";
import Works1 from "./Works";
import Works2 from "./Works2";
import Works3 from "./Works3";
import Works4 from "./Works4";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: Ninguna, 1: Adelante, -1: Atrás

  const worksComponents = [<Works1 />, <Works2 />, <Works3 />, <Works4 />];

  const handleNext = () => {
    setDirection(1); // Avanzar
    setCurrentIndex((prevIndex) => (prevIndex + 1) % worksComponents.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Retroceder
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + worksComponents.length) % worksComponents.length
    );
  };

  return (
    <div id="portfolio" className={style.Body}>
      <h2 className={style.title}>Portfolio</h2>
      <div className={style.glass}>
        <button className={style.Btn} onClick={handlePrev}>
          <MdArrowBackIos />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }} // Entrada desde la derecha si es hacia adelante, izquierda si es hacia atrás
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }} // Salida hacia la izquierda si es hacia adelante, derecha si es hacia atrás
            transition={{ duration: 0.3 }}
          >
            {worksComponents[currentIndex]}
          </motion.div>
        </AnimatePresence>

        <button className={style.Btn} onClick={handleNext}>
          <MdArrowForwardIos  />
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
