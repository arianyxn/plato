import React from 'react';
import './App.css';
import platoLogo from './plato.png'; // Импортируем изображение

function App() {
  return (
    <div className="App">
      <h1>С возвращением в Plato!</h1>
      <img src={platoLogo} className="plato-logo" alt="Plato Logo" />
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <p>Сегодня вы выполнили 75% своей цели!</p>
    </div>
  );
}

export default App;