import {
  ComponentProps,
  ElementType,
  ForwardedRef,
  LabelHTMLAttributes,
} from 'react';
import { FlexContainerType, TextType } from '../../../types';

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
  ref?: ForwardedRef<HTMLElement>;
} & TextType &
  FlexContainerType;
type TypographyNewProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps<E>>;
export type TypographyProps<
  E extends TypographyComponentType
> = TypographyNewProps<E>;

export type LabelProps = TextType &
  FlexContainerType &
  LabelHTMLAttributes<HTMLLabelElement>;
