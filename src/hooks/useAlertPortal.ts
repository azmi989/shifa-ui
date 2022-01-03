import { useEffect, useState } from 'react';
import { generateUID } from '../utils';
import '../components/Alert/PortalContainer.css';

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
  }, []);
  return {
    loaded,
    portalID,
  };
};
