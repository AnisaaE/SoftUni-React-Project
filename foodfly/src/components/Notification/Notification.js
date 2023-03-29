import './Notification.css';

export function Notification ({ message, type = 'info' }){
  const color = {
    info: 'blue',
    success: 'green',
    warning: 'orange',
    error: 'red',
  }[type];

  return (
    <div className={`notification ${type}`} style={{ backgroundColor: color }}>
      {message}
    </div>
  );
};
