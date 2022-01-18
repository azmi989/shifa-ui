import { ChangeEvent, useCallback, useState } from 'react';
type Props = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useNumberInputField = ({
  value,
  max = Infinity,
  min = Infinity,
  step = 1,
  onChange,
}: Props) => {
  const [newValue, setValue] = useState(value);
  const increase = () =>
    setValue(prev => (prev >= max ? prev : (prev += step)));
  const decrease = () =>
    setValue(prev => (prev <= min ? prev : (prev -= step)));
  useCallback(() => {
    onChange &&
      onChange({ target: { value: String(newValue) } } as ChangeEvent<
        HTMLInputElement
      >);
  }, [newValue, onChange]);
  return {
    newValue,
    setValue,
    increase,
    decrease,
  };
};
