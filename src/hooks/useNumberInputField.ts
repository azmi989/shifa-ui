import { ChangeEvent, useEffect, useState } from 'react';

export const useNumberInputField = (
  value: number,
  min?: number,
  max?: number,
  step?: number,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
) => {
  const [newValue, setValue] = useState(min || value);
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
  useEffect(() => {
    onChange &&
      onChange({ target: { value: String(newValue) } } as ChangeEvent<
        HTMLInputElement
      >);
  }, [newValue]);
  return {
    newValue,
    setValue,
    increase,
    decrease,
  };
};
