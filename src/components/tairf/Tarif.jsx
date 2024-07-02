import React, { useState } from 'react';
import style from './tarif.module.css';
import Button from './Button';
import TarifDetails from '../details/TarifDetails';

const Tarif = ({ name, price, background, speed, highlight }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleOnDetailsClick = () => {
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  return (
    <div className={`${style.wrap} ${highlight ? style.highlight : ''} ${background}`}>
      <h1 className={style.name}>{name}</h1>
      {!showDetails ? (
        <Button onDetailsClick={handleOnDetailsClick} />
      ) : (
        <TarifDetails price={price} speed={speed} onBackClick={handleBackClick}/>
      )}
    </div>
  );
};

export default Tarif;
