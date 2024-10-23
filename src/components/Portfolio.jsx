import React, { useState } from "react";
import style from "../style/Portfolio.module.css";
import Works1 from "./Works";
import Works2 from "./Works2";
import Works3 from "./Works3";
import Works4 from "./Works4";
import { motion, AnimatePresence } from "framer-motion";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const worksComponents = [<Works1 />, <Works2 />, <Works3 />, <Works4 />];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % worksComponents.length);
  };

  return (
    <div   id="portfolio" className={style.Body}>
      <div className={style.glass}>
        <h2 className={style.title}>Portfolio</h2>

        <AnimatePresence mode="wait">

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.3 }} 
          >
            {worksComponents[currentIndex]}
          </motion.div>
        </AnimatePresence>

        <button className={style.button} onClick={handleNext}>
          Mostrar siguiente
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
