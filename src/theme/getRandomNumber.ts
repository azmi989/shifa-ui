export const getRandomNumber = (min?: number, max?: number) => {
  let maxi = max || 100;
  let mini = min || 0;
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
};
