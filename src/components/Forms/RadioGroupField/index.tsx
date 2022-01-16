import React, { useEffect, useState } from 'react';
import { Container } from '../../Container';
import { Label } from '../../Typography';
import { RadioGroupProps } from '../FormFields.types';
import { RadioField } from './RadioField';

export const RadioGroupField = ({
  name,
  label,
  value,
  options,
  onChange,
  labelMargin,
}: RadioGroupProps) => {
  const [fieldValue, setFieldValue] = useState(value);
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const elemet = document.getElementsByClassName('radio-label')[0];
    setWidth(elemet.getBoundingClientRect().width);
  }, []);
  useEffect(() => {
    onChange(fieldValue);
  }, [fieldValue, onChange]);
  return (
    <Container display="flex" flexDirection="column" rowGap="0.5rem">
      <Label
        className="radio-label"
        style={{ width: 'fit-content' }}
        htmlFor={name}
      >
        {label}
      </Label>
      <Container
        display="flex"
        flexDirection="column"
        rowGap="0.5rem"
        margin={`0px calc(${labelMargin || width}px + 10px)`}
      >
        {options.map(option => (
          <RadioField
            value={option.value}
            checked={fieldValue === String(option.value)}
            name={name}
            label={option.text || String(option.value)}
            onChange={e => setFieldValue(e.target.value)}
          />
        ))}
      </Container>
    </Container>
  );
};
