export const animatedTransition = () => ({
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
});

export const transitions = {
  smoothTransition: 'all .2s ease-in-out',
};