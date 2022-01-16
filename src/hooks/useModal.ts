import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { DirectionsLR, DirectionsTB } from '../../types';
import { UseModalsProps } from '../components/Modal/Modal.types';
import { useModalPortal } from './useModalPortal';

export const useModal = ({
  ref,
  closeOnClickOutside,
  type,
}: UseModalsProps) => {
  const { portalID } = useModalPortal();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dialogProps, setDialogProps] = useState<{
    title?: string;
    message?: string;
  }>({});
  const portal = document.getElementById(portalID);
  const openModal = (title?: string, message?: string) => {
    type === 'dialog' ?? setDialogProps({ title, message });
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const modalRef = useRef(null);
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));
  const handelOnClickOutsideClose = () => {
    closeOnClickOutside && closeModal();
  };

  useOnClickOutside(modalRef, handelOnClickOutsideClose);
  useEffect(() => {
    open
      ? (document.getElementsByTagName('body')[0].style.overflow = 'hidden')
      : (document.getElementsByTagName('body')[0].style.overflow = 'auto');
    return () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
  }, [open]);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  const getTransformOrigin = (origin: DirectionsTB | DirectionsLR) => {
    switch (origin) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'bottom':
        return ' bottom';
      case 'top':
        return 'top';
      default:
        return undefined;
    }
  };
  const getTransform = (origin: DirectionsTB | DirectionsLR) => {
    if (open) {
      switch (origin) {
        case 'left':
          return 'scaleX(1)';
        case 'right':
          return 'scaleX(1)';
        case 'bottom':
          return 'scaleY(1)';
        case 'top':
          return 'scaleY(1)';
        default:
          return 'scaleY(1)';
      }
    } else {
      switch (origin) {
        case 'left':
          return 'scaleX(0)';
        case 'right':
          return 'scaleX(0)';
        case 'bottom':
          return 'scaleY(0)';
        case 'top':
          return 'scaleY(0)';
        default:
          return 'scaleY(0)';
      }
    }
  };
  return {
    portal,
    modalRef,
    getTransform,
    getTransformOrigin,
    mounted,
    dialogProps,
    closeModal,
    openModal,
  };
};
