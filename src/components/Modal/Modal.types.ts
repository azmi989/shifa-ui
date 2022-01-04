import { ForwardedRef } from 'react';
import { BackgroundType, DirectionsLR, DirectionsTB } from '../../../types';
import { ButtonProps } from '../Button/Button.types';
import { ContainerProps } from '../Container/Container.types';

type ModalType = 'base' | 'dialog';
type DialogProps = {
  actionButtonsVarient?: 'single' | 'ok-cancel';
  confirmButtonProps?: ButtonProps;
  abortButtonProps?: ButtonProps;
  confirmLogic?: (e?: any) => any;
  abortLogic?: (e?: any) => any;
};
export type ModalBaseProps = {
  closeOnClickOutside?: boolean;
  container?: ContainerProps;
  origin?: DirectionsTB | DirectionsLR;
  type?: ModalType;
} & DialogProps &
  Omit<ContainerProps, keyof BackgroundType>;

export type ModalBaseFunctionProps = {
  openModal: (title?: string, message?: string) => void | null;
  closeModal: () => void | null;
};
export type UseModalsProps = {
  ref: ForwardedRef<ModalBaseFunctionProps>;
  closeOnClickOutside: boolean;
  type: ModalType;
};
export type DialogModalProps = {
  title?: string;
  message?: string;
} & DialogProps &
  Pick<ModalBaseFunctionProps, 'closeModal'>;
