import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Crop } from 'react-image-crop';
import { useModalPortalRef } from './useModalPortal';

export const useImageCrop = (
  onChange: (image: string) => void,
  srcImg?: string
) => {
  const [fieldSrcImg, setFielSrcImg] = useState(srcImg || '');
  const [image, setImage] = useState<HTMLImageElement>({} as HTMLImageElement);
  const [result, setResult] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useModalPortalRef();
  const [crop, setCrop] = useState<Crop>({
    aspect: 1,
    width: 0,
    height: 0,
    unit: 'px',
    x: 0,
    y: 0,
  });

  const handleImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const img = URL.createObjectURL(event.target.files[0]);
      setFielSrcImg(img);
      modalRef.current?.openModal();
    }
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg', 1);

        setResult(base64Image);
        modalRef.current?.closeModal();
      }
    } catch (e) {
      console.log('crop the image');
    }
  };
  useEffect(() => {
    onChange(result);
  }, [result, onChange]);
  return {
    handleImage,
    inputRef,
    modalRef,
    crop,
    setCrop,
    getCroppedImg,
    result,
    setImage,
    fieldSrcImg,
  };
};
