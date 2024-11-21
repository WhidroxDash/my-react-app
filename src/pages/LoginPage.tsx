import React from 'react';

const LoginPage: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciar sesión');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" placeholder="Ingrese su usuario" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="Ingrese su contraseña" required />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;
