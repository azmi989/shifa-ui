import styled, { css } from 'styled-components';
import { ColorsType } from '../../../theme/theme.types';
import { getColor, getBorderRadius } from '../../../theme/utils';

export type StyledGeneralLabelProps = {
  color?: ColorsType;
  disabled?: boolean;
  selected?: boolean;
};

export const StyledGeneralLabel = styled.p<StyledGeneralLabelProps>`
  transition: background-color 100ms ease-in-out, color 100ms ease-in-out;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ selected }) =>
    selected
      ? css`
          border-radius: ${getBorderRadius('circle')};
          background-color: ${getColor('primary', undefined, '50%')};
        `
      : css`
          border-radius: ${getBorderRadius('rectangle')};
        `}
  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          cursor: not-allowed;
          color: ${getColor('error', 600)};
        `
      : css`
          color: ${getColor('secondary')};
          &:hover {
            cursor: pointer;
            color: ${getColor('paper')};
            background-color: ${getColor('primary', undefined, '50%')};
          }
        `}
`;
