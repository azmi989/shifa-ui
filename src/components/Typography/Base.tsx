import React from 'react';
import { defaultTypographyProps } from './Typography.defaults';
import { TypographyComponentType, TypographyProps } from './Typography.types';

const TypographyBase = ({
  as,
  ...props
}: TypographyProps<TypographyComponentType>) => {
  const Component = as || 'p';
  const defaultProps = defaultTypographyProps({ as, ...props });
  return <Component {...defaultProps}></Component>;
};
export default TypographyBase;
