import { ComponentProps, ElementType, LabelHTMLAttributes } from 'react';
import { FlexGridType, TextType } from '../../../types';

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
} & FlexGridType;

type TypographyNewProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<Omit<ComponentProps<E>, 'ref'>, keyof TypographyOwnProps<E>>;

export type TypographyProps<
  E extends TypographyComponentType
> = TypographyNewProps<E> & TextType;

export type LabelProps = TextType &
  FlexGridType &
  LabelHTMLAttributes<HTMLLabelElement>;
