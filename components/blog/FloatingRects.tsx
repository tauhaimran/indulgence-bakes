import { motion } from "framer-motion";

export function FloatingRects() {
  const variants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-20 h-20 bg-gold/20 rounded-lg top-10 left-5"
        variants={variants}
        animate="float"
      />
      <motion.div
        className="absolute w-16 h-16 bg-espresso/10 rounded-lg top-32 right-10"
        variants={variants}
        animate="float"
      />
      <motion.div
        className="absolute w-24 h-24 bg-gold/10 rounded-lg bottom-20 left-1/4"
        variants={variants}
        animate="float"
      />
    </div>
  );
}