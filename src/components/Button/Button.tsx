import React from "react";
import classes from './Button.module.scss';

type MyComponentProps = {
    onClick: () => void;
  };

const Button : React.FC<MyComponentProps>  = ({onClick}) => {
    const buttonText = 'Показать еще 5 билетов!';
    return (
        <button onClick={onClick} className={classes.btn} type='button'>
            {buttonText}
        </button>
    );
};

export default Button;