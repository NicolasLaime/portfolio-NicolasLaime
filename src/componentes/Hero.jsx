import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEROCONTENIDO } from "../data/constantes";
import foto from "/Foto-cv-2024.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [mostrarCV, setMostrarCV] = useState(false);

  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Nicolás Laime
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent"
              >
                Full stack developer
              </motion.span>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
              >
                {HEROCONTENIDO}
              </motion.p>

              <motion.button
                onClick={() => setMostrarCV(true)}
                className="mt-4 mb-8 lg:mb-0 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-300 transition-all"
              >
                Ver CV
              </motion.button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:p-8 opacity-70">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={foto}
                alt="Nicolas Laime"
                className="w-[500px] h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal CV */}
      <AnimatePresence>
        {mostrarCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMostrarCV(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl w-full max-w-5xl h-[90vh] overflow-hidden shadow-2xl"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold text-black">
                  Curriculum Vitae
                </h2>

                <button
                  onClick={() => setMostrarCV(false)}
                  className="text-red-500 text-2xl hover:text-red-700"
                >
                  ×
                </button>
              </div>

              <iframe
                src="/Cv-Nicolás-Laime-Dev.pdf"
                title="CV Nicolas Laime"
                className="w-full h-[calc(100%-70px)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;