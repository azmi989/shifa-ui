import styled from 'styled-components';
import { Container } from '..';
import { getBorderRadius, getColor } from '../../theme/utils';
import { CommonFieldProps } from './FormFields.types';

type Props = Omit<CommonFieldProps, 'name' | 'label'>;

export const StyledInputContainer = styled(Container)<Props>`
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0.5rem;
  height: 3rem;
  border-top-right-radius: ${({ varient }) =>
    varient === 'filled' ? getBorderRadius('xs') : undefined};
  border-top-left-radius: ${({ varient }) =>
    varient === 'filled' ? getBorderRadius('xs') : undefined};
  background-color: ${({ varient }) =>
    varient === 'filled' ? getColor('paper', 400, '50%') : undefined};
  &::after,
  &::before {
    position: absolute;
    content: '';
    bottom: 0px;
    height: 4px;
    left: 0;
    right: 0;
  }
  &::before {
    background-color: ${getColor('mainTextColor', undefined, '50%')};
    height: 3px;
  }
  &::after {
    transform-origin: center center;
    transition: transform 250ms ease;
    background-color: ${({ isError, varient }) =>
      varient !== 'outlined'
        ? isError
          ? getColor('error')
          : getColor('primary')
        : undefined};
    transform: scale(0, 1);
  }
  & > .float-label {
    position: absolute;
    width: fit-content;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
    left: 1rem;
    top: 50%;
    color: ${({ isError }) =>
      isError ? getColor('error') : getColor('mainTextColor')};
  }
  &:focus-within {
    &::after {
      transform: scale(1, 1);
    }
  }
`;
export const StyledInput = styled.input<Props>`
  height: 2rem;
  &::placeholder {
    color: transparent;
  }
  &:focus + .float-label,
  &:not(:placeholder-shown) + .float-label {
    transform: translate(-0rem, -1.3rem) scale(0.8);
  }
`;
export const StyledFieldset = styled.fieldset<Props>`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.25rem 0.5rem;
  position: relative;
  padding: 0 1rem;
  border: 1px solid ${getColor('mainTextColor')};
  border-radius: ${getBorderRadius('xs')};
  height: 3rem;
  & > .dummy {
    color: transparent;
  }
`;
export const StyledLegend = styled.legend<Props>`
  /* position: absolute; */
  width: fit-content;
  pointer-events: none;
  transform-origin: 0 0;
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  left: 1rem;
  transform: translateY(100%);
  top: 20%;
  color: ${({ isError }) =>
    isError ? getColor('error') : getColor('mainTextColor')};
`;
