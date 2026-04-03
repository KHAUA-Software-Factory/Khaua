import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; // Não esqueça do CSS do Bootstrap!
import './App.css';

function App() {
  return (
    <Router> {/* O Router PRECISA estar aqui, no topo */}
      <Routes>
        {/* Agora que a Home é sua Software Factory, ela é a rota raiz */}
        <Route path="/" element={<Home />} />
        
        {/* Se você tiver outras páginas no futuro, adicione aqui */}
      </Routes>
    </Router>
  );
}

export default App;