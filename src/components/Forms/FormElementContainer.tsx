import React, { FC } from 'react';
import { Typography, Label } from '..';
import { CommonFieldProps } from './FormFields.types';
import {
  StyledFieldset,
  StyledLegend,
  StyledInputContainer,
} from './InputContainer.styled';

type Props = { resizable?: boolean; disabled?: boolean } & Pick<
  CommonFieldProps,
  | 'name'
  | 'varient'
  | 'isError'
  | 'errorMessage'
  | 'label'
  | 'disableFloat'
  | 'forceFocus'
>;

export const FormElementContainer: FC<Props> = ({
  name,
  varient = 'standard',
  isError,
  errorMessage,
  label,
  forceFocus,
  disableFloat,
  children,
  resizable,
  disabled,
}) => {
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset
          resizable={resizable}
          forceFocus={forceFocus || disabled}
          disableFloat={disabled ? disabled : disableFloat}
          varient={varient}
          isError={isError}
        >
          {children}
          <StyledLegend
            disabled={disabled}
            forceFocus={forceFocus || disabled}
            disableFloat={disabled ? disabled : disableFloat}
            className="legend"
          >
            {label}
          </StyledLegend>
          <StyledLegend
            disabled={disabled}
            forceFocus={forceFocus || disabled}
            disableFloat={disabled ? disabled : disableFloat}
            className="float-legend"
            isError={isError}
            children={label}
          />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          flowType="flex"
          elementType="container"
          flexDirection="column"
          justifyContent="end"
          varient={varient}
          isError={isError}
          forceFocus={forceFocus || disabled}
          disableFloat={disabled ? disabled : disableFloat}
          resizable={resizable}
          disabled={disabled}
        >
          {children}
          <Label className="float-label" htmlFor={name} children={label} />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledInputContainer>
      )}
    </>
  );
};
