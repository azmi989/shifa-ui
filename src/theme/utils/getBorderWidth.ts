import { defaultTheme } from '..';
import { BorderWidthType } from '../theme.types';

export const getBorderWidth = (width?: BorderWidthType) => {
  if (width) {
    return defaultTheme.borderWidth[width];
  } else return defaultTheme.borderWidth.xxs;
};
