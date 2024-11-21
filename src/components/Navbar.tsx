import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos del menú
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavTitle>Gestión Documental</NavTitle>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/login">Iniciar Sesión</MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
