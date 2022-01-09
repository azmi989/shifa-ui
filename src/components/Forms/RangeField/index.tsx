import React, { useEffect, useState, useRef } from 'react';
import { SliderFieldProps } from '../FormFields.types';
import { SliderContainer, StyledSlider, StyledThump } from './Slider.styled';

export const RangeField = ({ thickness, ...props }: SliderFieldProps) => {
  const range = props.max && props.min ? props.max - props.min : 100;
  const [spanPosition, setSpanPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      setSpanPosition(Number(inputRef.current.value) / range);
    }
  }, [inputRef.current]);
  const handelThumpPosition = (value: number) => {
    setSpanPosition(value / range);
  };
  return (
    <SliderContainer thickness={thickness} thumpPosition={spanPosition}>
      <StyledSlider
        ref={inputRef}
        {...props}
        onChange={e => {
          handelThumpPosition(Number(e.target.value));
          props.onChange ? props.onChange(e) : undefined;
        }}
        type="range"
      />
      <StyledThump thumpPosition={spanPosition} thickness={thickness} />
      <span className="thump-overlay" />
    </SliderContainer>
  );
};
