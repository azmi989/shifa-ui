import { useEffect, useImperativeHandle, useState } from 'react';
import { useAlertPortal } from '../hooks';
import { Alerts, UseAlertsProps } from '../components/Alert/Alert.types';
import { generateUID } from '../utils';

export const useAlerts = ({ autoClose, ref, timeout }: UseAlertsProps) => {
  const { loaded, portalID } = useAlertPortal();
  const portal = document.getElementById(portalID);
  const [alerts, setAlerts] = useState<Alerts[]>([]);
  const [removing, setRemoving] = useState('');
  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(item => item.id !== id));
  };

  useImperativeHandle(ref, () => ({
    addAlert: (item: Omit<Alerts, 'id'>) => {
      setAlerts(prev => [...prev, { ...item, id: generateUID() }]);
    },
  }));
  useEffect(() => {
    if (alerts.length && autoClose) {
      const id = alerts[alerts.length - 1].id;
      setTimeout(() => {
        setRemoving(id);
      }, timeout);
    }
  }, [alerts, autoClose, timeout]);
  useEffect(() => {
    if (removing) {
      setAlerts(prev => prev.filter(item => item.id !== removing));
    }
  }, [removing]);
  return {
    loaded,
    portal,
    alerts,
    removeAlert,
  };
};
