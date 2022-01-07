import styled from 'styled-components';
import { getColor } from '../../../theme/utils';
import { SelectFieldProps } from '../FormFields.types';

type Props = { open?: boolean } & Omit<SelectFieldProps, 'label'>;

export const StyledSelect = styled.select<Props>`
  all: unset;
  width: 100%;
  height: ${({ varient }) => (varient === 'outlined' ? '90%' : '75%')};
  position: relative;
  cursor: pointer;
  & + .arrow {
    position: absolute;
    top: ${({ varient }) => (varient === 'outlined' ? '30%' : '50%')};
    right: 1rem;
    transition: transform 200ms ease;
    transform: rotate(180deg);
    transform-origin: center center;
    transform: ${({ open }) =>
      open ? 'rotate(180deg) scale(2)' : 'rotate(0deg) scale(2)'};
    fill: ${({ isError }) =>
      isError ? getColor('error') : getColor('primary')};
  }
`;
