import { ThemeTextType } from '../theme.types';
import { defaultTheme } from '..';

export const getTextProps = (text: ThemeTextType) => {
  return {
    letterSpacing: defaultTheme.text[text].letterSpacing,
    size: defaultTheme.text[text].size,
    weight: defaultTheme.text[text].weight,
  };
};
