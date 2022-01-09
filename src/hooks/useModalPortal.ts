import { useEffect, useRef, useState } from 'react';
import { ModalBaseFunctionProps } from '../components/Modal/Modal.types';
import { generateUID } from '../utils';

export const useModalPortal = () => {
  const [portalID] = useState(`modal-portal-${generateUID()}`);
  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalID;
    document.getElementsByTagName('body')[0].prepend(div);
    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalID]);
  return {
    portalID,
  };
};

export const useModalPortalRef = () => useRef<ModalBaseFunctionProps>(null);
