import React from 'react';

const TelegramWidget = () => {
  const handleTelegramRedirect = () => {
    window.location.href = 'https://t.me/Monitoringtoolsbot';
  };

  return (
    <button className="btn btn-primary" onClick={handleTelegramRedirect}>
      <i className="bi bi-telegram"></i> Bot
    </button>
  );
};

export default TelegramWidget;
