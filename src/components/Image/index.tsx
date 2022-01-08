import React, { FC } from 'react';
import { useImageOnLoad } from 'usehooks-ts';
import { Container } from '..';
import { defaultTheme } from '../../theme';
import { ImageProps } from './Image.types';

export const Image: FC<ImageProps> = ({
  src,
  srcSet,
  alt,
  content,
  contentPosition,
  smallImage,
  ...container
}) => {
  const Placeholder =
    'https://res.cloudinary.com/duqqzz1nx/image/upload/v1640788575/UI%20assets/placeholder_uex2p2.jpg';
  const { handleImageOnLoad, css } = useImageOnLoad();
  return (
    <Container position="relative" width="100%" height="100%" {...container}>
      {/* Small image load fast */}
      <img
        style={{
          position: 'absolute',
          inset: '0rem',
          height: '100%',
          width: '100%',
          zIndex: container.zIndex
            ? defaultTheme.zIndex[container.zIndex]
            : undefined,
          ...css.thumbnail,
        }}
        src={smallImage || Placeholder}
        alt="thumpnail"
      />
      {/* Full size image */}
      <img
        onLoad={handleImageOnLoad}
        style={{
          position: 'absolute',
          inset: '0rem',
          height: '100%',
          width: '100%',
          ...css.fullSize,
        }}
        src={src}
        srcSet={srcSet}
        alt={alt}
      />
      {content && (
        <Container
          style={{ display: 'inline-block' }}
          backgroundBlur="5px"
          backgroundColor="paper"
          backgroundColorOpacity="20%"
          borderRadius="s"
          position="absolute"
          top="20%"
          left="5%"
          minWidth="10%"
          width="50%"
          {...content}
        />
      )}
    </Container>
  );
};
