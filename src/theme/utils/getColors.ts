import { ColorsType, OpacityType } from '../theme.types';
import { Variations } from '../../types';
import { defaultTheme } from '..';
import { hexToRGPA } from './hexToRGPA';

export const getColor = (
  color?: ColorsType,
  varient?: Variations,
  opacity?: OpacityType
) => {
  if (color) {
    if (color === 'transparent') {
      return 'transparent';
    }
    if (opacity) {
      if (varient) {
        return hexToRGPA(
          //@ts-ignore
          defaultTheme.colors[color].variations[varient],
          defaultTheme.opacity[opacity]
        );
      } else {
        if (typeof defaultTheme.colors[color] === 'string') {
          return hexToRGPA(
            //@ts-ignore
            defaultTheme.colors[color],
            defaultTheme.opacity[opacity]
          );
        } else
          return hexToRGPA(
            //@ts-ignore
            defaultTheme.colors[color].main,
            defaultTheme.opacity[opacity]
          );
      }
    } else {
      if (varient) {
        return hexToRGPA(
          //@ts-ignore
          defaultTheme.colors[color].variations[varient],
          '1'
        );
      } else {
        if (typeof defaultTheme.colors[color] === 'string') {
          //@ts-ignore
          return hexToRGPA(defaultTheme.colors[color], '1');
        } else
          return hexToRGPA(
            //@ts-ignore
            defaultTheme.colors[color].main,
            '1'
          );
      }
    }
    // if (varient && opacity) {
    //   return hexToRGPA(
    //     //@ts-ignore
    //     defaultTheme.colors[color].variations[varient],
    //     defaultTheme.opacity[opacity]
    //   );
    // }
    // if (varient) {
    // }
    // if (typeof defaultTheme.colors[color] === "string") {
    //   //@ts-ignore
    //   return hexToRGPA(defaultTheme.colors[color]);
    // }
    // if (opacity) {
    //   //@ts-ignore
    //   return hexToRGPA(defaultTheme.colors[color], opacity);
    // }
    //
  }
  return undefined;
};
