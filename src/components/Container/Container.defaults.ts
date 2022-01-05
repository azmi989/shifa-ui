import { ContainerProps } from './Container.types';

export const containerDefaults = ({
  flowType = 'flex',
  elementType = 'container',
  fillContainer = true,
  cursor = 'default',
  ...props
}: ContainerProps): ContainerProps => {
  return {
    flowType,
    elementType,
    height: fillContainer ? '100%' : props.height,
    width: fillContainer ? '100%' : props.width,
    ...props,
  };
};
