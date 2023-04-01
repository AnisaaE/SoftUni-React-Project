import './Notification.css';
import { useEffect, useState } from 'react';

export function Notification({ message, type, duration = '3000' }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);


  const color = {
    info: 'blue',
    success: 'green',
    warning: 'orange',
    error: 'red',
  }[type];

  return (
    <div className={`notification ${type}`} style={{ backgroundColor: color, display: isVisible ? "block" : "none" }}>
      {message}
    </div>
  );
};
