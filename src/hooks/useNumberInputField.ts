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
  useCallback(() => {
    onChange &&
      onChange({ target: { value: String(newValue) } } as ChangeEvent<
        HTMLInputElement
      >);
  }, [newValue, onChange]);
  const dispatch = (type: 'increase' | 'decrease'): void | null => {
    if (type === 'increase') {
      setValue(prev => (prev >= max ? prev : (prev += step)));
    } else if (type === 'decrease') {
      setValue(prev => (prev <= min ? prev : (prev -= step)));
    }
  };
  return {
    newValue,
    setValue,
    dispatch,
  };
};
