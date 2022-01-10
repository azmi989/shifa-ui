import { ContainerProps } from './Container.types';

export const containerDefaults = ({
  flowType = 'flex',
  elementType = 'container',
  fillContainer = true,
  cursor = 'default',
  disableGutter = false,
  width = 'fit-content',
  height = 'fit-content',
  ...props
}: ContainerProps): ContainerProps => {
  return {
    flowType,
    elementType,
    height: fillContainer ? height || '100%' : height,
    width: fillContainer ? width || '100%' : width,
    disableGutter,
    ...props,
  };
};
