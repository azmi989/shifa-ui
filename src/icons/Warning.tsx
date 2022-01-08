import React, { FunctionComponent, SVGAttributes } from 'react';

const Warning: FunctionComponent<SVGAttributes<SVGElement>> = ({
  height = 16,
  width = 16,
  viewBox = '0 0 24 24',
  className,
  ...props
}) => {
  const classes = ['icon', className].join(' ');
  return (
    <svg
      className={classes}
      height={height}
      width={width}
      viewBox={viewBox}
      {...props}
    >
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
    </svg>
  );
};

export default Warning;
