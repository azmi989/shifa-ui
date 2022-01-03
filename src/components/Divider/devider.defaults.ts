import { DividerProps } from './Divider.types';
import { getColor } from '../../theme/utils';

const getDividerProps = ({
  direction = 'x',
  color = 'primary',
  varient = 'solid',
  borderWidth = 'xs',
  borderOpacity = '100%',
  ...props
}: DividerProps): DividerProps => {
  return {
    direction,
    varient,
    borderWidth,
    borderTop:
      varient === 'rounded'
        ? `2px ${varient} ${getColor(
            color,
            props.borderColorVarient,
            borderOpacity
          )}`
        : `2px solid ${getColor(
            color,
            props.borderColorVarient,
            borderOpacity
          )}`,
    borderRadius: varient === 'rounded' ? 'xs' : undefined,
    ...props,
  };
};

export default getDividerProps;

//radius
