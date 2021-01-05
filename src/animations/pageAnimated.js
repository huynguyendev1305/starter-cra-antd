// https://www.framer.com/api/motion/component/

export const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "50vw",
  },
};
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};
