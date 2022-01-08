import React, { useEffect, useRef, useState } from 'react';
import { Container, Label, Button } from '../..';
import Upload from '../../../icons/Upload';
import { FileFieldProps } from '../FormFields.types';

export const FileField = ({
  name,
  label,
  isError,
  errorMessage,
  onChange,
  ...props
}: FileFieldProps) => {
  const [fieldValue, setFieldValue] = useState<string | ArrayBuffer>();
  const [fileName, setFileName] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState(isError);
  const [fieldErrorMessage, setFieldErrorMessage] = useState(errorMessage);
  const inputRef = useRef<HTMLInputElement>(null);
  const getBase64 = (files: FileList | null) => {
    let reader = new FileReader();
    if (files) {
      const file = files[0];
      reader.readAsDataURL(file);
      reader.onload = function() {
        setFieldValue(reader.result as string | ArrayBuffer);
        setFieldError(false);
        setFileName(file.name);
        onChange(reader.result as string | ArrayBuffer);
      };
      reader.onerror = function() {
        setFieldError(true);
        setFieldErrorMessage('An error occured');
      };
    }
  };
  return (
    <Container
      flexDirection="column"
      rowGap="1rem"
      width="fit-content"
      alignItems="flex-start"
    >
      <Label htmlFor={name} textColor={isError ? 'error' : 'black'}>
        {fieldError ? fieldErrorMessage : label}
      </Label>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        rowGap="0.5rem"
      >
        <input
          style={{ display: 'none' }}
          type="file"
          id={name}
          ref={inputRef}
          onChange={e => getBase64(e.target.files)}
          {...props}
        />
        <Button
          disabled={props.disabled}
          startIcon={<Upload />}
          varient="outlined"
          onClick={() => inputRef.current?.click()}
        >
          upload
        </Button>
        <Label style={{ overflow: 'hidden' }}>
          {fileName || 'Select a file'}
        </Label>
      </Container>
    </Container>
  );
};
