import styled from 'styled-components';
import { Container, Label } from '../..';
import {
  getBorderRadius,
  getBorderWidth,
  getColor,
} from '../../../theme/utils';
import { CheckBoxProps } from '../FormFields.types';

type Props = CheckBoxProps;

export const StyledCheckBoxContainer = styled(Container)<Props>`
  &::before {
    content: '';
    position: absolute;
    inset: ${getBorderWidth('xxs')};
    clip-path: polygon(0 57%, 28% 99%, 100% 5%, 91% 0, 31% 65%, 10% 42%);
    transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
    transition: transform 200ms ease;
    pointer-events: none;
    z-index: 10;
    background-color: ${getColor('primary')};
    cursor: pointer;
  }
  &:hover {
    background-color: ${getColor('secondary', undefined, '20%')};
  }
  & > .label {
    cursor: pointer;
    user-select: none;
    padding: 0 1.7rem;
  }
`;
