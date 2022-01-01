import { defaultTheme } from '..';
import { BorderRadiusType } from '../theme.types';

export const getBorderRadius = (radius?: BorderRadiusType) => {
  if (radius) {
    return defaultTheme.borderRadius[radius];
  } else return undefined;
};
