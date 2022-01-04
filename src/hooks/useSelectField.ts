import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  SelectInputFieldProps,
  SelectOptionType,
} from '../components/Forms/FormFields.types';
import { generateUID } from '../utils';

export const useSelectField = ({
  name,
  value,
  defaultValue,
}: Pick<SelectInputFieldProps, 'value' | 'name' | 'defaultValue'>) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState<SelectOptionType>({
    id: generateUID(),
    value: defaultValue,
  });
  const containerRef = useRef(null);
  useOnClickOutside(containerRef, () => {
    setFocus(false);
    setOpen(false);
  });

  return {
    open,
    focus,
    containerRef,
    setFocus,
    setOpen,
    fieldValue,
    setFieldValue,
  };
};
