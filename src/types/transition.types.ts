import { CSSProperties } from 'react';

export type TransitionType = Pick<
  CSSProperties,
  | 'transition'
  | 'transitionDelay'
  | 'transitionDuration'
  | 'transitionProperty'
  | 'transitionTimingFunction'
>;
