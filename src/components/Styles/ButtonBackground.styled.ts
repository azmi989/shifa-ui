import { css } from 'styled-components';
import { getColor } from '../../theme/utils';
import { ButtonProps } from '../Button/Button.types';

export const StyledButtonBackground = css<ButtonProps>`
  background: ${({ background }) => background};
  background-attachment: ${({ backgroundAttachment }) => backgroundAttachment};
  background-blend-mode: ${({ backgroundBlendMode }) => backgroundBlendMode};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  background-color: ${({ varient, backgroundColor, disabled }) =>
    !disabled
      ? varient === 'contained'
        ? getColor(backgroundColor)
        : 'transparent'
      : varient === 'contained'
      ? getColor('paper', 500)
      : 'transparent'};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-origin: ${({ backgroundOrigin }) => backgroundOrigin};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-position-x: ${({ backgroundPositionX }) => backgroundPositionX};
  background-position-y: ${({ backgroundPositionY }) => backgroundPositionY};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
  &:hover {
    background-color: ${({ backgroundColor, varient, disabled }) =>
      !disabled
        ? varient === 'contained'
          ? getColor(backgroundColor, 700)
          : getColor(backgroundColor, undefined, '20%')
        : undefined};
  }
`;
