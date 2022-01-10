import React, { FC, SVGProps } from 'react';
import { InsetType, TransformType, TransitionType } from '../../../../../types';

export type ArrowProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  color?: string;
} & TransformType &
  TransitionType &
  InsetType;
const ArrowBase: FC<ArrowProps> = ({
  width = 28,
  height = 70,
  viewBox = '0 0 28 70',
  color = 'black',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow">
        <path
          d="M1.25001 15.3922C0.664222 14.8064 0.664222 13.8567 1.25001 13.2709L13.2708 1.25007C13.8566 0.664282 14.8064 0.664282 15.3921 1.25007C15.9779 1.83586 15.9779 2.7856 15.3921 3.37139L3.37133 15.3922C2.78554 15.978 1.8358 15.978 1.25001 15.3922Z"
          fill={color}
        />
        <path
          d="M27.3921 15.3922C26.8063 15.978 25.8566 15.978 25.2708 15.3922L13.25 3.37141C12.6642 2.78562 12.6642 1.83587 13.25 1.25008C13.8357 0.664298 14.7855 0.664298 15.3713 1.25008L27.3921 13.2709C27.9779 13.8567 27.9779 14.8064 27.3921 15.3922Z"
          fill={color}
        />
        <path
          d="M14.1893 71.4529C13.0848 71.4529 12.1893 70.5575 12.1893 69.4529L12.1893 3.45288C12.1893 2.34831 13.0848 1.45288 14.1893 1.45288C15.2939 1.45288 16.1893 2.34831 16.1893 3.45288L16.1893 69.4529C16.1893 70.5575 15.2939 71.4529 14.1893 71.4529Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ArrowBase;
