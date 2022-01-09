import { useEffect, useRef, useState } from 'react';
import { generateUID } from '../utils';
import { AlertFunctionProps } from '../components/Alert/Alert.types';

export const useAlertPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalID] = useState(`alert-portal-${generateUID()}`);
  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalID;
    div.className = 'portal';
    document.getElementsByTagName('body')[0].prepend(div);
    setLoaded(true);
    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalID]);
  return {
    loaded,
    portalID,
  };
};
export const useAlertPortalRef = () => useRef<AlertFunctionProps>(null);
