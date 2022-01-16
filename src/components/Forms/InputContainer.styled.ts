import styled, { css } from 'styled-components';
import { getBorderRadius, getColor } from '../../theme/utils';
import { Container } from '../Container';
import { CommonFieldProps } from './FormFields.types';

type Props = { resizable?: boolean; disabled?: boolean } & Omit<
  CommonFieldProps,
  'name' | 'label'
>;
type FieldsetProps = { height?: string | number; resizable?: boolean } & Omit<
  CommonFieldProps,
  'name' | 'label'
>;

export const StyledInputContainer = styled(Container)<Props>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1.5rem;
  height: ${({ resizable, height }) =>
    resizable ? 'auto' : height || '3.5rem'};
  width: ${({ resizable }) => (resizable ? 'auto' : '100%')};
  border-top-right-radius: ${({ varient }) =>
    varient === 'contained' ? getBorderRadius('xs') : undefined};
  border-top-left-radius: ${({ varient }) =>
    varient === 'contained' ? getBorderRadius('xs') : undefined};
  background-color: ${({ varient, disabled }) =>
    disabled
      ? getColor('paper', 500, '50%')
      : varient === 'contained'
      ? getColor('paper', 400, '20%')
      : undefined};
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
  &::before {
    background-color: ${({ disabled }) =>
      disabled ? getColor('paper', 900, '50%') : undefined};
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
    left: 1rem;
    top: 50%;
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
    color: ${({ isError }) =>
      isError ? getColor('error') : getColor('mainTextColor')};
    ${({ forceFocus, disableFloat, isError }) =>
      forceFocus || disableFloat
        ? css`
            transform: translate(-0rem, -1.3rem) scale(0.8);
            color: ${isError ? getColor('error') : getColor('primary')};
          `
        : undefined}
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
      : undefined};
`;
export const StyledInput = styled.input<Props>`
  height: 2rem;
  padding: 0 0.5rem;
  &::placeholder {
    color: transparent;
  }

  &:focus + .float-label,
  &:not(:placeholder-shown) + .float-label {
    ${({ disableFloat }) =>
      !disableFloat &&
      css`
        transform: translate(-0rem, -1.3rem) scale(0.8);
        color: ${getColor('primary')};
      `}
  }
  &[type='number'] {
    appearance: textfield;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : undefined)};
`;
export const StyledFieldset = styled.fieldset<FieldsetProps>`
  width: ${({ resizable }) => (resizable ? 'auto' : '100%')};
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.25rem 0.5rem;
  position: relative;
  padding: 0 1rem 0.5rem 1rem;
  border: 1px solid
    ${({ isError, forceFocus }) =>
      isError
        ? getColor('error')
        : forceFocus
        ? getColor('primary')
        : getColor('mainTextColor')};
  border-radius: ${getBorderRadius('xs')};
  height: ${({ resizable, height }) =>
    resizable ? 'auto' : height || '3.5rem'};

  input:focus + .legend,
  input:not(:placeholder-shown) + .legend,
  &:focus-within > .legend {
    width: fit-content;
  }

  input:focus ~ .float-legend,
  input:not(:placeholder-shown) ~ .float-legend,
  &:focus-within > .float-legend {
    transform: translateY(-150%);
    color: ${({ isError }) =>
      isError ? getColor('error') : getColor('primary')};
  }
  .float-legend {
    ${({ forceFocus, isError }) =>
      forceFocus
        ? css`
            transform: translateY(-130%);
            color: ${isError ? getColor('error') : getColor('primary')};
          `
        : undefined}
  }
  input:focus,
  input:not(:placeholder-shown),
  &:focus-within {
    border-color: ${({ isError }) =>
      isError ? getColor('error') : getColor('primary')};
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
  color: ${({ isError, forceFocus }) =>
    isError
      ? getColor('error')
      : forceFocus
      ? getColor('primary')
      : getColor('mainTextColor')};
  &.legend {
    ${({ disableFloat, isError }) =>
      disableFloat
        ? css`
            width: fit-content;
            transform: translateY(-10%);
            color: ${isError ? getColor('error') : undefined};
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
            top: 20%;
          `}
  }
  transition: transform 250ms, color 250ms ease;
`;
