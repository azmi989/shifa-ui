import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Container } from '../..';
import { getBorderWidth, getColor } from '../../../theme/utils';
import { CheckBoxProps } from '../FormFields.types';

type Props =
  | Omit<
      CheckBoxProps,
      keyof Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'>
    >
  | Omit<CheckBoxProps, 'name' | 'label'>;

type InputProps = Omit<CheckBoxProps, 'label'>;

export const StyledCheckBoxContainer = styled(Container)<Props>`
  & > .icon {
    position: absolute;
    inset: 0px;
    z-index: -2;
    transform: ${({ checked }) => (checked ? 'scale(1.3)' : 'scale(0)')};
    fill: ${getColor('secondary')};
    transition: transform 50ms ease;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    transition: transform 200ms ease;
    pointer-events: none;
    z-index: 10;
    border-style: solid;
    border-radius: 2px;
    border-width: ${getBorderWidth('xs')};
    border-color: ${getColor('secondary')};
    transition: border 50ms ease;
    cursor: pointer;
  }
  &:hover::before {
    border-color: ${({ checked }) =>
      checked ? undefined : getColor('primary')};
  }
  & > .label {
    cursor: pointer;
    user-select: none;
    padding: 0 1.7rem;
  }
`;

export const StyledCheckBoxInput = styled.input<InputProps>`
  height: 1.5rem;
  width: 1.5rem;
  background-color: red;
`;
