import { FC } from "react";
import classes from './ticketTabs.module.scss';
import { useUnit } from "effector-react";
import { $ticketsSort } from "../../store/store";
import { updateTicketsSort } from "../../store/events";

const TicketTabs: FC  = () => {
    const sort = useUnit($ticketsSort)
    const handleSort = useUnit(updateTicketsSort)

    return (
        <div className={classes.ticketTabs_wrapper} >
            <div 
                className= {`${classes.ticketTabs_item} ${sort==='lowPrice'? classes.active:''}`} 
                onClick={ () => handleSort('lowPrice') } 
            >Самый дешевый</div>
            <div 
                className= {`${classes.ticketTabs_item} ${sort==='fastest'? classes.active:''}`} 
                onClick={() => handleSort('fastest')} 
            >Самый быстрый</div>
            <div 
            className= {`${classes.ticketTabs_item} ${sort==='optimal'? classes.active:''}`} 
            onClick={() => handleSort('optimal')} 
            >Оптимальный</div>
        </div>
    );
};

export default TicketTabs;