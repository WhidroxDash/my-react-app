import React from 'react';

type PopupProps = {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ isVisible, title, content, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        {content}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;
