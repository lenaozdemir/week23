import React from 'react';
import './Tarif.css';

const Tariff = ({ name, price, background, speed, highlight }) => {
    return (
        <div className={`tarif__wrap ${highlight ? 'highlight' : '' } ${background}`}>
        <h1 className="tarif__name">{name}</h1>
        <div className="tarif__price-box">
          <p className="tarif__currency"></p>
          <p className="tarif__price">{price} руб. </p>
        </div>
        <div className="tarif__speed">{speed}</div>
        <div className="tarif__note">
          Объем трафика не ограничен
        </div>
      </div>
    );
  };

  export default Tariff;
  

