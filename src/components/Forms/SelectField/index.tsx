import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import DropDown from '../../../icons/DropDown';
import { Label } from '../../Typography';
import { SelectFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import { StyledSelect } from './Select.styled';

export const SelectField = ({
  varient = 'outlined',
  ...props
}: SelectFieldProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset
          height={props.multiple ? '10rem' : undefined}
          isError={props.isError}
          forceFocus={open}
        >
          <StyledSelect
            ref={ref}
            open={open}
            onClick={() => setOpen(!open)}
            varient={varient}
            {...props}
          >
            {props.options?.map(option => (
              <option key={option.id} value={option.value}>
                {option.extraArgs || option.value}
              </option>
            ))}
          </StyledSelect>
          {!props.multiple ? <DropDown className="arrow" /> : null}
          <StyledLegend disableFloat={open ? true : undefined}>
            {props.label}
          </StyledLegend>
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          varient={varient}
          isError={props.isError}
          forceFocus={open}
          padding="0 1rem"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          height={props.multiple ? '10rem' : undefined}
        >
          <StyledSelect
            ref={ref}
            open={open}
            varient={varient}
            onClick={() => setOpen(!open)}
            {...props}
          >
            {props.options?.map(option => (
              <option key={option.id}>{option.value}</option>
            ))}
          </StyledSelect>
          {!props.multiple ? <DropDown className="arrow" /> : null}
          <Label
            className="label"
            style={{
              position: 'absolute',
              top: '0',
              left: '1rem',
            }}
            htmlFor={props.name}
          >
            {props.label}
          </Label>
        </StyledInputContainer>
      )}
    </>
  );
};
