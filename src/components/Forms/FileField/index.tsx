import React, { useRef, useState } from 'react';
import Upload from '../../../icons/Upload';
import { Button } from '../../Button';
import { Container } from '../../Container';
import { Label } from '../../Typography';
import { FileFieldProps } from '../FormFields.types';

export const FileField = ({
  name,
  label,
  isError,
  errorMessage,
  onChange,
  ...props
}: FileFieldProps) => {
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
      display="flex"
      flexDirection="column"
      rowGap="1rem"
      width="fit-content"
      alignItems="flex-start"
    >
      <Label htmlFor={name} textColor={isError ? 'error' : 'black'}>
        {fieldError ? fieldErrorMessage : label}
      </Label>
      <Container
        display="flex"
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
