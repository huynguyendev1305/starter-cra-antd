// https://framer-animations.netlify.app/

export const staggeredList = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  },
  item: {
    initial: {
      opacity: 0,
      x: -100,
    },

    animate: {
      opacity: 1,
      x: 0,
    },
  },
};
