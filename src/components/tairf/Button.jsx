import React from "react";
import styles from './button.module.css'

const Button = ({onDetailsClick}) => {
    return(
        <button className={styles.button} onClick={onDetailsClick}>Подробнее</button>
        );
    
};

export default Button;