import { AlertProps } from './Alert.types';

export const defaultAlertProps = ({
  severity = 'info',
  varient = 'outline',
  borderRadius = 's',
  ...props
}: AlertProps): AlertProps => ({
  severity,
  varient,
  borderRadius,
  ...props,
});
