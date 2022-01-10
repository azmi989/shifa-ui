import { css } from 'styled-components';
import { TransformType } from '../../../types';

export const StyledTransform = css<TransformType>`
  ${({ transform, transformBox, transformOrigin, transformStyle }) => css`
    transform: ${transform};
    transform-box: ${transformBox};
    transform-origin: ${transformOrigin};
    transform-style: ${transformStyle};
  `}
`;
