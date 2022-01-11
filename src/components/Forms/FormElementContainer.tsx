import React, { FC, ReactNode } from 'react';
import { Typography, Label } from '..';
import { CommonFieldProps } from './FormFields.types';
import {
  StyledFieldset,
  StyledLegend,
  StyledInputContainer,
} from './InputContainer.styled';

type Props = {
  resizable?: boolean;
  disabled?: boolean;
  renderElement?: ReactNode;
} & Pick<
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
  varient = 'base',
  isError,
  errorMessage,
  label,
  forceFocus,
  disableFloat,
  children,
  resizable,
  disabled,
  renderElement,
}) => {
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset
          resizable={resizable}
          forceFocus={forceFocus}
          disableFloat={disabled ? disabled : disableFloat}
          varient={varient}
          isError={isError}
        >
          {renderElement}
          {children}
          <StyledLegend
            disabled={disabled}
            forceFocus={forceFocus}
            disableFloat={disabled ? disabled : disableFloat}
            className="legend"
          >
            {label}
          </StyledLegend>
          <StyledLegend
            disabled={disabled}
            forceFocus={forceFocus}
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
          display="flex"
          flexDirection="column"
          justifyContent="end"
          varient={varient}
          isError={isError}
          forceFocus={forceFocus}
          disableFloat={disabled ? disabled : disableFloat}
          resizable={resizable}
          disabled={disabled}
        >
          {renderElement}
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
