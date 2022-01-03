import { css } from 'styled-components';
import { InsetType } from '../../../types';
import { defaultTheme } from '../../theme';

export const StyledInset = css<InsetType>`
  inset: ${({ inset }) => inset};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) =>
    zIndex ? defaultTheme.zIndex[zIndex] : undefined};
`;
