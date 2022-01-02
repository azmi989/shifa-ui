import { css } from 'styled-components';
import { TransformType } from '../../../types';

export const StyledTransform = css<TransformType>`
  transform: ${({ transform }) => transform};
  transform-box: ${({ transformBox }) => transformBox};
  transform-origin: ${({ transformOrigin }) => transformOrigin};
  transform-style: ${({ transformStyle }) => transformStyle};
`;
