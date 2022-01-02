import { ContainerProps } from './Container.types';

export const containerDefaults = ({
  flowType = 'flex',
  elementType = 'container',
  width = '100%',
  ...props
}: ContainerProps): ContainerProps => {
  return {
    flowType,
    elementType,
    width,
    ...props,
  };
};
