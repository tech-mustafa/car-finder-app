export const randomPriceGenerator = () => {
  // min and max included
  const min = 4,
    max = 15;
  const priceOne = (Math.random() * (max - min + 1) + min).toFixed(2);
  const priceTwo = (Math.random() * (max - min + 1) + min).toFixed(2);
  return parseFloat(priceOne) < parseFloat(priceTwo)
    ? `${priceOne} to ${priceTwo}`
    : `${priceTwo} to ${priceOne}`;
};
