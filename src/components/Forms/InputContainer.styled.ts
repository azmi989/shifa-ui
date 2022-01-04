import styled, { css } from 'styled-components';
import { Container } from '..';
import { getBorderRadius, getColor } from '../../theme/utils';
import { CommonFieldProps } from './FormFields.types';

type Props = Omit<CommonFieldProps, 'name' | 'label'>;

export const StyledInputContainer = styled(Container)<Props>`
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1.5rem;
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
    height: 1px;
    left: 0;
    right: 0;
  }
  &::before,
  &::after {
    background-color: ${({ isError }) =>
      isError ? getColor('error') : getColor('mainTextColor')};
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
    height: 2px;
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
  & > .error-message {
    position: absolute;
    color: ${getColor('error')};
    bottom: -30%;
    transition: opacity 200ms ease;
  }
  ${({ forceFocus }) =>
    forceFocus
      ? css`
          &::after {
            transform: scale(1, 1);
          }
        `
      : undefined}
`;
export const StyledInput = styled.input<Props>`
  height: 2rem;
  padding: 0 0.5rem;
  &::placeholder {
    color: transparent;
  }
  &:focus + .float-label,
  &:not(:placeholder-shown) + .float-label {
    transform: translate(-0rem, -1.3rem) scale(0.8);
  }
  &[type='number'] {
    appearance: textfield;
  }
`;
export const StyledFieldset = styled.fieldset<Props>`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.25rem 0.5rem;
  position: relative;
  padding: 0 1rem;
  border: 1px solid
    ${({ isError }) =>
      isError ? getColor('error') : getColor('mainTextColor')};
  border-radius: ${getBorderRadius('xs')};
  height: 3.5rem;
  input:focus + .legend,
  input:not(:placeholder-shown) + .legend,
  &:focus-within > .legend {
    width: fit-content;
  }

  input:focus ~ .float-legend,
  input:not(:placeholder-shown) ~ .float-legend,
  &:focus-within > .float-legend {
    transform: translateY(-130%);
    color: ${({ isError }) =>
      isError ? getColor('error') : getColor('primary')};
  }

  input:focus,
  input:not(:placeholder-shown),
  &:focus-within {
    border-color: ${({ isError }) =>
      isError ? getColor('error') : getColor('primary')};
    border-width: 2px;
  }
  & > .error-message {
    position: absolute;
    color: ${getColor('error')};
    bottom: -50%;
    transition: opacity 200ms ease;
  }
`;
export const StyledLegend = styled.legend<Props>`
  /* width: fit-content; */
  pointer-events: none;
  transform-origin: 0 0;
  color: ${({ isError }) =>
    isError ? getColor('error') : getColor('mainTextColor')};
  &.legend {
    ${({ disableFloat, isError }) =>
      disableFloat
        ? css`
            width: fit-content;
            transform: translateY(-10%);
            color: ${isError ? getColor('error') : getColor('primary')};
          `
        : css`
            color: transparent;
            width: 0px;
          `}
  }
  &.float-legend {
    ${({ disableFloat }) =>
      disableFloat
        ? css`
            display: none;
          `
        : css`
            position: absolute;
            top: 10%;
          `}
  }
  transition: transform 250ms, color 250ms ease;
`;
