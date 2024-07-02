import React from "react";
import style from '../tairf/tarif.module.css';

const TarifDetails = ({price, speed, onBackClick} ) => {
    return(
        <div className={style.details} >
        <p>{price} руб. </p>
        <p>{speed}</p>
        <p> Объем трафика не ограничен </p>
        <button onClick={onBackClick} className={style.button}>x</button>
        </div>
    )
};

export default TarifDetails;