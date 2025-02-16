import React,{ FC } from "react";
import classes from './ticketTabs.module.scss';

interface Props {
onSortTicketsLowPrice: () => void;
onSortTicketsFastest: () => void;
onSortTicketsOptima: () => void;
sort: string;

}

const TicketTabs: FC<Props>  = ({onSortTicketsLowPrice, onSortTicketsFastest, onSortTicketsOptima, sort}) => {
    return (
        <div className={classes.ticketTabs_wrapper} >
            <div 
                className= {`${classes.ticketTabs_item} ${sort==='lowPrice'? classes.active:''}`} 
                onClick={onSortTicketsLowPrice} 
            >Самый дешевый</div>
            <div 
                className= {`${classes.ticketTabs_item} ${sort==='fastest'? classes.active:''}`} 
                onClick={onSortTicketsFastest} 
            >Самый быстрый</div>
            <div 
            className= {`${classes.ticketTabs_item} ${sort==='optima'? classes.active:''}`} 
            onClick={onSortTicketsOptima} 
            >Оптимальный</div>
        </div>
    );
};

export default TicketTabs;