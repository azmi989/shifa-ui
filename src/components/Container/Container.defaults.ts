import { ContainerProps } from './Container.types';

export const containerDefaults = ({
  fillContainer,
  fitContent,
  cursor = 'default',
  disableGutter = false,
  width = 'fit-content',
  height = 'fit-content',
  ...props
}: ContainerProps): ContainerProps => {
  return {
    height: fillContainer ? '100%' : fitContent ? 'fit-content' : height,
    width: fillContainer ? '100%' : fitContent ? 'fit-content' : width,
    disableGutter,
    fitContent,
    fillContainer,
    ...props,
  };
};
