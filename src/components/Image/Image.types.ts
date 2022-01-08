import { ComponentProps } from 'react';
import { InsetType } from '../../../types';
import { ContainerProps } from '../Container/Container.types';

export type ImageProps = {
  content?: Omit<ContainerProps, keyof InsetType>;
  contentPosition?: Omit<InsetType, 'position'>;
  smallImage?: string;
} & Omit<ComponentProps<'img'>, keyof ContainerProps> &
  ContainerProps;
