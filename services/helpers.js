import { NAMES } from '../constants/names';

export const getDataWithNames = (arr) => {
  const names = NAMES.slice();
  return arr.map((item) => {
    const chosenIdx = Math.round((names.length - 1) * Math.random());
    item.name = names.splice(chosenIdx, 1)[0];
    return item;
  });
};
