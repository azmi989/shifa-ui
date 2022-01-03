import { ForwardedRef } from 'react';
import { BorderType, DirectionType, SeverityType } from '../../../types';
import { ContainerProps } from '../Container/Container.types';
export type Alerts = {
  id: string;
  severity?: SeverityType;
  title?: string;
  message?: string;
  detailed?: boolean;
};

export type AlertProps = {
  id: string;
  detailed?: boolean;
  title?: string;
  message?: string;
  closeButton?: boolean;
  severity?: SeverityType;
  varient?: 'outline' | 'basic';
  onClose: (e: string) => void;
  container?: ContainerProps;
  origin?: DirectionType;
} & Pick<BorderType, 'borderRadius'>;

export type AlertFunctionProps = {
  addAlert: (e: Omit<Alerts, 'id'>) => void | null;
};
export type AlertPortalProps = {
  container?: ContainerProps;
  autoClose?: boolean;
  timeout?: number;
  alertProps?: AlertProps;
  origin?: DirectionType;
  maxAlerts?: number;
};

export type UseAlertsProps = {
  ref?: ForwardedRef<AlertFunctionProps>;
} & Required<Pick<AlertPortalProps, 'timeout' | 'autoClose' | 'maxAlerts'>>;
