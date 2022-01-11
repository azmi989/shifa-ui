import {
  LabelProps,
  TypographyComponentType,
  TypographyProps,
} from './Typography.types';

export const defaultLabelProps = ({
  textProps = 'body2',
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  style,
  ...props
}: LabelProps): LabelProps => {
  return {
    textProps,
    justifyContent,
    alignItems,
    display,
    style: {
      height: 'fit-content',
      width: 'fit-content',
      ...style,
    },
    ...props,
  };
};

export const defaultTypographyProps = ({
  as,
  textProps,
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  style,
  ...props
}: TypographyProps<
  TypographyComponentType
>): TypographyProps<TypographyComponentType> => {
  switch (as) {
    case 'h1':
      textProps = 'h1';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'h2':
      textProps = 'h2';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'h3':
      textProps = 'h3';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'h4':
      textProps = 'h4';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'h5':
      textProps = 'h5';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'h6':
      textProps = 'h6';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    case 'p':
      textProps = 'body1';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
    default:
      textProps = 'body1';
      return {
        display,
        textProps,
        justifyContent,
        alignItems,
        style: {
          width: 'fit-content',
          ...style,
        },
        ...props,
      };
  }
};
