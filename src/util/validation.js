export const isThereAnyError = (errors) => {
  const reducer = (previous, current) => previous || current;
  return (Object.values(errors)).reduce(reducer);
};