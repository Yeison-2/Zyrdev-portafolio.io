
export const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
});

export const fadeInUp = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
    },
  },
});

export const fadeInDown = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
    },
  },
});

export const fadeInLeft = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
    },
  },
});

export const fadeInRight = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
    },
  },
});

export const staggerContainer = (delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay,
    },
  },
});
