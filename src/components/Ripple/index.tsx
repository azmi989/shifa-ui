import React, { FC, MouseEvent, useState } from 'react';
import { StyledRipple } from '../Styles';
import { RippleProps } from './Ripple.types';
import { useDebouncedRippleCleanUp } from './useDebouncedRippleCleanUp';

const Ripple: FC<RippleProps> = ({
  color = 'primary',
  duration = 850,
  ...props
}) => {
  const [rippleArray, setRippleArray] = useState<
    {
      x: number;
      y: number;
      size: any;
    }[]
  >([]);
  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray(prevState => [...prevState, newRipple]);
  };
  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });
  return (
    <StyledRipple
      onMouseDown={addRipple}
      duration={duration}
      color={color}
      {...props}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <span
            key={`ripple_ ${index}`}
            style={{
              top: `${ripple.y}px`,
              left: `${ripple.x}px`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
            }}
          />
        ))}
    </StyledRipple>
  );
};

export default Ripple;
