import React from 'react';
import './Ejercicios.css';

const Circuitos = () => {
  return (
    <div className="circuitos">
       <div className="espacio-libre">
        <h2>EJERCICIOS</h2>
        <h3>4</h3>
        <img src="1.jpg" alt="Circuitos" />
        <h2>Puxada frontal </h2>
        <p> 3 Series x 12 repeticiones </p>
          <button className="btn-ver"><img src="./fecha.jpg" alt="icon" /></button>
        </div>
        <div className="espacio-libre">
        <img src="2.jpg" alt="Circuitos" />
        <h2>Remada Curvada</h2>
        <p> 3 Series x 12 repeticiones </p>
          <button className="btn-ver"><img src="./fecha.jpg" alt="icon" /></button>
        </div>
        <div className="espacio-libre">
        <img src="3.jpg" alt="Circuitos" />
        <h2>Remada Unilateral</h2>
        <p> 3 Series x 12 repeticiones </p>
          <button className="btn-ver"><img src="./fecha.jpg" alt="icon" /></button>
        </div>
        <div className="espacio-libre">
        <img src="4.jpg" alt="Circuitos" />
        <h2>Levantamiento terra</h2>
        <p> 3 Series x 12 repeticiones </p>
          <button className="btn-ver"><img src="./fecha.jpg" alt="icon" /></button>
        </div>
    </div>
    
  );
};

export default Circuitos;
