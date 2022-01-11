import { css } from 'styled-components';
import { InsetType } from '../../../types';
import { defaultTheme } from '../../theme';

export const StyledInset = css<InsetType>`
  ${({ inset, position, top, bottom, left, right, zIndex }) => css`
    inset: ${inset};
    position: ${position};
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
    z-index: ${zIndex ? defaultTheme.zIndex[zIndex] : undefined};
  `}
`;
