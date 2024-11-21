import React from 'react';

const RegisterPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro exitoso');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <input type="text" placeholder="Nombre de usuario" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterPage;
