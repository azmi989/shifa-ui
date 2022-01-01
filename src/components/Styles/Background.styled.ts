import { css } from 'styled-components';
import { getColor } from '../../theme/utils';
import { BackgroundType } from '../../types';

export const StyledBackground = css<BackgroundType>`
  background: ${({ background }) => background};
  background-attachment: ${({ backgroundAttachment }) => backgroundAttachment};
  background-blend-mode: ${({ backgroundBlendMode }) => backgroundBlendMode};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  background-color: ${({
    backgroundColor,
    backgroundColorVarient,
    backgroundColorOpacity,
  }) =>
    getColor(backgroundColor, backgroundColorVarient, backgroundColorOpacity)};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-origin: ${({ backgroundOrigin }) => backgroundOrigin};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-position-x: ${({ backgroundPositionX }) => backgroundPositionX};
  background-position-y: ${({ backgroundPositionY }) => backgroundPositionY};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
`;
