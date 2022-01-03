import { AlertProps } from './Alert.types';

export const defaultAlertProps = ({
  severity = 'info',
  varient = 'outline',
  borderRadius = 's',
  closeButton = true,
  detailed = false,
  ...props
}: AlertProps): AlertProps => ({
  severity,
  varient,
  detailed,
  closeButton,
  borderRadius,
  ...props,
});
