import React, { } from 'react';
import { } from 'react-router-dom'; // Para redirigir después de iniciar sesión

import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciar sesión');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Ingrese su usuario" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingrese su contraseña" required />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;
