import { useEffect, useState } from 'react';

export const useNumberInputField = (
  value: number,
  min?: number,
  max?: number,
  step?: number,
  onChange?: (number: number) => void
) => {
  const [newValue, setValue] = useState(min || value);
  useEffect(() => {
    onChange && onChange(newValue);
  }, [newValue]);
  const increase = () =>
    setValue(prev => {
      if (step) {
        if (max) {
          if (prev >= max || prev >= max - step) return prev;
          else return (prev += step);
        } else return (prev += step);
      } else {
        if (max) {
          if (prev >= max) return prev;
          else return (prev += 1);
        } else return (prev += 1);
      }
    });
  const decrease = () =>
    setValue(prev => {
      if (step) {
        if (min) {
          if (prev <= min || prev <= min - step) return prev;
          else return (prev -= step);
        } else return (prev -= step);
      } else {
        if (min) {
          if (prev <= min) return prev;
          else return (prev -= 1);
        } else return (prev -= 1);
      }
    });
  return {
    newValue,
    setValue,
    increase,
    decrease,
  };
};
