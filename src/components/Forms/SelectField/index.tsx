import React, { FC } from 'react';
import { SelectInputFieldProps } from '../FormFields.types';
import { SingleSelectField } from './SingleSelectField';
import { MultipleSelectField } from './MultipleSelectField';

export const SelectField: FC<SelectInputFieldProps> = ({
  multiple,
  ...props
}) => {
  return (
    <>
      {multiple ? (
        <MultipleSelectField {...props} />
      ) : (
        <SingleSelectField {...props} />
      )}
    </>
  );
};
