import { ChangeEvent, useEffect, useState } from 'react';
type Props = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  customOnChange?: true;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useNumberInputField = ({
  value,
  max,
  min,
  step,
  onChange,
  customOnChange,
}: Props) => {
  const [newValue, setValue] = useState(value);
  const increase = () =>
    customOnChange &&
    setValue(prev => {
      if (step) {
        if (max) {
          if (prev >= max || prev >= max - step) return prev;
        }
        return (prev += step);
      } else {
        if (max) {
          if (prev >= max) return prev;
        }
        return (prev += 1);
      }
    });
  const decrease = () =>
    customOnChange &&
    setValue(prev => {
      if (step) {
        if (min) {
          if (prev <= min - step) return prev;
        }
        return (prev -= step);
      } else {
        if (min) {
          if (prev <= min) return prev;
        }
        return (prev -= 1);
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
