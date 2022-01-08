import React, { FunctionComponent, SVGAttributes } from 'react';

const ExpandLess: FunctionComponent<SVGAttributes<SVGElement>> = ({
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
      <path d="M12.3532 10.4761L12 10.1237L11.6468 10.4761L7.41039 14.7033L6.70711 14L12 8.70711L17.2929 14L16.5896 14.7033L12.3532 10.4761Z" />
    </svg>
  );
};

export default ExpandLess;
