import React from 'react';

import classes from './Button.module.css';

const Button = () => {

    const buttonText = 'Показать еще 5 билетов!';
    return (
        <button className={classes.btn} type='button'>
            {buttonText}
        </button>
    );
};

export default Button;