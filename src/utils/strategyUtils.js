export const getStrategyCount = (strategies = []) =>
  strategies.reduce((accumulator, name) => {
    accumulator[name] = (accumulator[name] || 0) + 1;
    return accumulator;
  }, {});
