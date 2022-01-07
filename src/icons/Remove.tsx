import React, { FunctionComponent, SVGAttributes } from 'react';

const Close: FunctionComponent<SVGAttributes<SVGElement>> = ({
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  );
};

export default Close;
