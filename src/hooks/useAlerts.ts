import { useEffect, useImperativeHandle, useState } from 'react';
import { useAlertPortal } from '../hooks';
import { Alerts, UseAlertsProps } from '../components/Alert/Alert.types';
import { generateUID } from '../utils';

export const useAlerts = ({
  autoClose,
  ref,
  timeout,
  maxAlerts,
}: UseAlertsProps) => {
  const { loaded, portalID } = useAlertPortal();
  const portal = document.getElementById(portalID);
  const [alerts, setAlerts] = useState<Alerts[]>([]);
  const [removing, setRemoving] = useState('');
  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(item => item.id !== id));
  };
  const addAlert = (item: Omit<Alerts, 'id'>) => {
    alerts.length === maxAlerts ? removeAlert(alerts[0].id) : undefined;
    setAlerts(prev => [...prev, { ...item, id: generateUID() }]);
  };
  useImperativeHandle(ref, () => ({
    addAlert,
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
