import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { getBorderWidth, getColor } from '../../../theme/utils';
import { Container } from '../../Container';
import { CheckBoxProps } from '../FormFields.types';

type Props =
  | Omit<
      CheckBoxProps,
      keyof Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'>
    >
  | Omit<CheckBoxProps, 'name' | 'label'>;

export const StyledRadioContainer = styled(Container)<Props>`
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    z-index: -2;
    transform: ${({ checked }) => (checked ? 'scale(0.7)' : 'scale(0)')};
    background-color: ${getColor('secondary')};
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
    border-radius: 50%;
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
