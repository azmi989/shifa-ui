import { css } from 'styled-components';
import { getColor } from '../../theme/utils';
import { ButtonProps } from '../Button/Button.types';

export const StyledButtonBackground = css<ButtonProps>`
  background: ${({ background }) => background};
  background-attachment: ${({ backgroundAttachment }) => backgroundAttachment};
  background-blend-mode: ${({ backgroundBlendMode }) => backgroundBlendMode};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  ${({ varient, backgroundColor, disabled }) =>
    !disabled
      ? varient === 'contained'
        ? css`
            background-color: ${getColor(backgroundColor)};
            & > .icon {
              fill: ${getColor(backgroundColor)};
            }
          `
        : css`
            background-color: transparent;
            fill: ${getColor(backgroundColor)};
          `
      : varient === 'contained'
      ? css`
          background-color: ${getColor('paper', 500)};
          & > .icon {
            fill: ${getColor('paper', 500)};
          }
        `
      : css`
          background-color: transparent;
        `};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-origin: ${({ backgroundOrigin }) => backgroundOrigin};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-position-x: ${({ backgroundPositionX }) => backgroundPositionX};
  background-position-y: ${({ backgroundPositionY }) => backgroundPositionY};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
  &:hover {
    ${({ backgroundColor, varient, disabled }) =>
      !disabled
        ? varient === 'contained'
          ? css`
              background-color: ${getColor(backgroundColor, 700)};
            `
          : css`
              background-color: ${getColor(backgroundColor, undefined, '20%')};
            `
        : undefined};
  }
  ${({ backgroundColor, varient, disabled, hover }) =>
    hover
      ? !disabled
        ? varient === 'contained'
          ? css`
              background-color: ${getColor(backgroundColor, 700)};
              & > .icon {
                fill: ${getColor(backgroundColor, 700)};
              }
            `
          : css`
              background-color: ${getColor(backgroundColor, undefined, '20%')};
            `
        : undefined
      : undefined};
`;
