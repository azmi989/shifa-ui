import {
  BorderType,
  DirectionType,
  SeverityType,
  WithOpenState,
} from '../../../types';

export type AlertProps = {
  direction?: DirectionType;
  timeout?: number | null;
  haveBody?: boolean;
  severity?: SeverityType;
  varient?: 'outline' | 'basic';
} & WithOpenState &
  Pick<BorderType, 'borderRadius'>;
