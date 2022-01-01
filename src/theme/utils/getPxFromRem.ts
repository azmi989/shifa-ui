import { defaultTheme } from '..';

export const getPxFromRem = (unit: string | number): number => {
  let ret: number = 0;
  if (typeof unit === 'string') {
    if (unit.includes('rem')) {
      ret = Number(unit.split('rem')[0]) * defaultTheme.rootFontSize;
    } else if (unit.includes('px')) {
      ret = Number(unit.split('px')[0]);
    } else
      throw new Error(
        `Only rem or px units alowed for icons (plain numbers are considered px too), you provided ${unit}`
      );
  } else ret = unit;
  return ret;
};
