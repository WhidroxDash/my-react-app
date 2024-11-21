import React from 'react';
import { Outlet } from 'react-router-dom'; // Permite renderizar rutas hijas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizarán las rutas hijas definidas en main.tsx */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
