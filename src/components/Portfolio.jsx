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

        {/* Añadir AnimatePresence para manejar la salida/entrada con animación */}
        <AnimatePresence mode="wait">
          {/* Aplicar las animaciones con motion.div */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }} // Inicia fuera del viewport (derecha)
            animate={{ opacity: 1, x: 0 }} // Anima para entrar desde la derecha
            exit={{ opacity: 0, x: -100 }} // Anima para salir hacia la izquierda
            transition={{ duration: 0.3 }} // Duración de la animación
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
