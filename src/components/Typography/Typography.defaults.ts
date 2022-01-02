import {
  LabelProps,
  TypographyComponentType,
  TypographyProps,
} from './Typography.types';

export const defaultLabelProps = ({
  textProps = 'body2',
  justifyContent = 'center',
  alignItems = 'center',
  ...props
}: LabelProps): LabelProps => {
  return {
    textProps,
    justifyContent,
    alignItems,
    ...props,
  };
};

export const defaultTypographyProps = ({
  as,
  textProps,
  justifyContent = 'center',
  alignItems = 'center',
  ...props
}: TypographyProps<
  TypographyComponentType
>): TypographyProps<TypographyComponentType> => {
  switch (as) {
    case 'h1':
      textProps = 'h1';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'h2':
      textProps = 'h2';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'h3':
      textProps = 'h3';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'h4':
      textProps = 'h4';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'h5':
      textProps = 'h5';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'h6':
      textProps = 'h6';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    case 'p':
      textProps = 'body1';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
    default:
      textProps = 'body1';
      return {
        textProps,
        justifyContent,
        alignItems,
        ...props,
      };
  }
};
