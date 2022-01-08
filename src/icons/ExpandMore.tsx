import React, { FunctionComponent, SVGAttributes } from 'react';

const ExpandMore: FunctionComponent<SVGAttributes<SVGElement>> = ({
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
      <path d="M16.5896 8.70672L17.2929 9.41L12 14.7029L6.70711 9.41L7.41039 8.70672L11.6468 12.9339L12 13.2863L12.3532 12.9339L16.5896 8.70672Z" />
    </svg>
  );
};

export default ExpandMore;
