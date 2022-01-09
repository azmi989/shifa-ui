import styled from 'styled-components';
import { Container } from '../..';
import { getBorderRadius, getColor } from '../../../theme/utils';
import { SliderFieldProps } from '../FormFields.types';

type Props = {
  thumpPosition?: number;
  thickness?: 'small' | 'medium';
};

export const SliderContainer = styled(Container)<Props>`
  position: relative;
  height: ${({ thickness }) => (thickness === 'small' ? '0.3rem' : '0.7rem')};
`;
export const StyledThump = styled.span<Props>`
  transform-origin: left;
  position: absolute;
  inset: 0;
  transform: ${({ thumpPosition }) => `scale(${thumpPosition},1)`};
  border-radius: 3px;
  background-color: ${getColor('primary')};
  pointer-events: none;
`;
export const StyledSlider = styled.input<Partial<SliderFieldProps>>`
  /* appearance: none; */
  width: 100%;
  height: ${({ thickness }) => (thickness === 'small' ? '0.3rem' : '0.7rem')};
  background: ${getColor('primary', 800, '70%')};
  border-radius: ${getBorderRadius('lg')};
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    background: unset;
    border: unset;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${getColor('primary')};
  }

  &::-moz-range-thumb {
    background: unset;
    border: unset;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${getColor('primary')};
  }
`;
