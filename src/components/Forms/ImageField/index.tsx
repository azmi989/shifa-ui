import React from 'react';
import ReactCrop from 'react-image-crop';
import { useImageCrop } from '../../../hooks';
import Upload from '../../../icons/Upload';
import { ImageFieldProps } from '../FormFields.types';
import 'react-image-crop/dist/ReactCrop.css';
import { Label } from '../../Typography';
import { Container } from '../../Container';
import { Button } from '../../Button';
import { Modal } from '../../Modal';
export const ImageField = ({
  srcImg,
  label,
  onChange,
  ...props
}: ImageFieldProps) => {
  const {
    handleImage,
    inputRef,
    modalRef,
    crop,
    setCrop,
    getCroppedImg,
    result,
    setImage,
    fieldSrcImg,
  } = useImageCrop(onChange, srcImg);
  return (
    <Container
      width="fit-content"
      display="flex"
      flexDirection="column"
      rowGap="0.5rem"
    >
      <Label htmlFor={props.name}>{label}</Label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        ref={inputRef}
        style={{ display: 'none' }}
        {...props}
      />
      {fieldSrcImg && (
        <Modal type="base" ref={modalRef}>
          <ReactCrop
            src={fieldSrcImg}
            imageStyle={{
              maxHeight: '80vh',
              width: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
            }}
            onImageLoaded={setImage}
            crop={crop}
            onChange={setCrop}
          />
          <Button onClick={getCroppedImg}>crop</Button>
        </Modal>
      )}
      <img
        src={result}
        alt={label}
        style={{
          height: '15rem',
          width: '100%',
          objectFit: 'contain',
          backgroundSize: 'cover',
        }}
      />
      <Button
        disabled={props.disabled}
        startIcon={<Upload />}
        varient="outlined"
        onClick={() => inputRef.current?.click()}
      >
        select
      </Button>
    </Container>
  );
};
