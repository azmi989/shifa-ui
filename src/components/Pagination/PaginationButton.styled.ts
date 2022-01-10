import styled, { css } from 'styled-components';
import { Button } from '..';
import { getBorderRadius } from '../../theme/utils';
import { ButtonProps } from '../Button/Button.types';

export type PaginationButtonProps = {
  rounded?: 'circle' | 'rectangle';
} & ButtonProps;

export const StyledPaginationButton = styled(Button)<PaginationButtonProps>`
  ${({ size }) => {
    switch (size) {
      case 's' || 'xs':
        return css`
          height: 1.1rem;
          width: 1.1rem;
        `;
      case 'md':
        return css`
          height: 1.5rem;
          width: 1.5rem;
        `;
      case 'lg':
        return css`
          height: 1.75rem;
          width: 1.75rem;
        `;
      default:
        return css`
          height: 2rem;
          width: 2rem;
        `;
    }
  }}
border-radius:${({ rounded }) => getBorderRadius(rounded || 'rectangle')};
display: flex;
  justify-content: center;
  align-items: center;
`;
