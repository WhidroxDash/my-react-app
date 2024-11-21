import React from 'react';
import Button from '../components/Button';
import Popup from '../components/Popup';

const MainPage: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = React.useState(false);

  return (
    <div>
      <h1>Página Principal</h1>
      <Button label="Crear Grupo Familiar" onClick={() => setPopupVisible(true)} />
      <Popup
        isVisible={isPopupVisible}
        title="Crear Grupo Familiar"
        content={<p>Formulario para crear grupo</p>}
        onClose={() => setPopupVisible(false)}
      />
    </div>
  );
};

export default MainPage;
