import { ContainerProps } from './Container.types';

export const containerDefaults = (props: ContainerProps): ContainerProps => {
  return {
    flowType: 'flex',
    elementType: 'container',
    ...props,
  };
};
