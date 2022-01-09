import React, { useEffect, useState } from 'react';
import { CheckBoxField } from '..';
import { Container, Label } from '../..';
import { CheckBoxGroupProps } from '../FormFields.types';

export const CheckBoxGroupField = ({
  options,
  name,
  label,
  onChange,
  labelMargin,
}: CheckBoxGroupProps) => {
  const [optionsValue, setOptionsValue] = useState<string[]>([]);
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const elemet = document.getElementsByClassName('checkbox-label')[0];
    setWidth(elemet.getBoundingClientRect().width);
  }, []);
  useEffect(() => {
    onChange(optionsValue);
  }, [optionsValue, onChange]);
  return (
    <Container flowType="flex" elementType="container" flexDirection="column">
      <Label
        className="checkbox-label"
        style={{ width: 'fit-content' }}
        htmlFor={name}
      >
        {label}
      </Label>
      <Container
        flowType="flex"
        elementType="container"
        flexDirection="column"
        rowGap="0.5rem"
        margin={`0px calc(${labelMargin || width}px + 10px)`}
      >
        {options.map(option => (
          <CheckBoxField
            checked={optionsValue.includes(String(option.value))}
            name={name}
            label={option.text || String(option.value)}
            onChange={() =>
              setOptionsValue(prev =>
                prev.includes(String(option.value))
                  ? prev.filter(item => item !== String(option.value))
                  : [...prev, String(option.value)]
              )
            }
          />
        ))}
      </Container>
    </Container>
  );
};
