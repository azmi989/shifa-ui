import { css } from 'styled-components';
import { CursorType } from '../../../types';

export const StyledCursor = css<CursorType>`
  cursor: ${({ cursor }) => cursor};
`;
