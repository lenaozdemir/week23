import React from 'react';
import style from './tarif.module.css';
import Button from './Button'

const Tariff = ({ name, price, background, speed, highlight }) => {
    return (
    <div className={ `${style.wrap} ${highlight ? style.highlight : '' } ${background}` }>
      <h1 className={style.name}>{name}</h1>
      <p className={style.price}>{price} руб. </p>
      <p className={style.speed}>{speed}</p>
      <p className={style.note}> Объем трафика не ограничен </p>
      <Button/>
    </div>
    );
  };

  export default Tariff;
  

