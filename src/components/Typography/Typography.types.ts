import {
  ComponentProps,
  ElementType,
  ForwardedRef,
  LabelHTMLAttributes,
} from 'react';
import { FlexContainerType, TextType } from '../../../types';

// export type TypographyComponentType = HTMLHeadingElement | HTMLParagraphElement;
export type TypographyComponentType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

type TypographyOwnProps<E extends ElementType> = {
  as?: E;
} & FlexContainerType;

type TypographyNewProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<Omit<ComponentProps<E>, 'ref'>, keyof TypographyOwnProps<E>>;

export type TypographyProps<
  E extends TypographyComponentType
> = TypographyNewProps<E> & TextType;

export type LabelProps = TextType &
  FlexContainerType &
  LabelHTMLAttributes<HTMLLabelElement>;
