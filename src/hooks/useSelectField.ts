import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  MultipleSelectInputFieldProps,
  SelectOptionType,
  SingleSelectInputFieldProps,
} from '../components/Forms/FormFields.types';
import { generateUID } from '../utils';

export const useSingleSelectField = ({
  defaultValue,
  onChange,
}: Pick<SingleSelectInputFieldProps, 'defaultValue' | 'onChange'>) => {
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
  useEffect(() => {
    onChange(fieldValue.value);
  }, [fieldValue]);
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
export const useMultipleSelectField = ({
  onChange,
}: Pick<MultipleSelectInputFieldProps, 'onChange'>) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState<SelectOptionType[]>([]);
  const containerRef = useRef(null);
  useOnClickOutside(containerRef, () => {
    setFocus(false);
    setOpen(false);
  });
  useEffect(() => {
    let newValues: string[] = [];
    fieldValue.map(val => newValues.push(val.value));
    onChange(newValues);
  }, [fieldValue]);
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
