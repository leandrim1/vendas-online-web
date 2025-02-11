import { notification as notificationAntd } from 'antd';
import { useGlobalContext } from './useGlobalContext';
import { useEffect } from 'react';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'bottomRight',
      });
    }
    alert('Passou aqui');
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};
