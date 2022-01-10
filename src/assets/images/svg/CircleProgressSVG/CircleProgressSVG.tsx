import React, {
  FC,
  forwardRef,
  SVGProps,
  ForwardedRef,
  CSSProperties,
} from 'react';
import {
  WithInset,
  WithTransform,
  WithTransformOrigin,
  WithTransition,
} from '../../../../types/tools/generics';
export type CircleProgressSVGProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  color?: string;
  ref?: ForwardedRef<SVGSVGElement>;
  circleRef?: ForwardedRef<SVGCircleElement>;
  circleStrokeDashoffset?: string | number;
  circleStrokeDasharray?: string | number;
  circleStyle?: CSSProperties;
} & WithTransform &
  WithTransformOrigin &
  WithTransition &
  WithInset;
const CircleProgressSVG: FC<CircleProgressSVGProps> = forwardRef(
  (
    {
      width = 30,
      height = 30,
      viewBox = '0 0 120 120',
      color = 'black',
      circleRef,
      circleStrokeDashoffset = 0,
      circleStrokeDasharray,
      circleStyle,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        {...props}
        ref={ref}
        fill="none"
      >
        <circle
          style={circleStyle}
          stroke={color}
          strokeWidth="10"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
          strokeDashoffset={circleStrokeDashoffset}
          strokeDasharray={circleStrokeDasharray}
          ref={circleRef}
        />
      </svg>
    );
  }
);

export default CircleProgressSVG;
