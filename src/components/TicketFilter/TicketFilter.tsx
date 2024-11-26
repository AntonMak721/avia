import classes from './ticketFilter.module.css';

const TicketFilter = () => {
    return (
        <div className={classes.ticketFilter_wrapper}>
            <div className={classes.ticketFilter_item} >Самый дешевый</div>
            <div className={classes.ticketFilter_item}>Самый быстрый</div>
            <div className={classes.ticketFilter_item}>Оптимальный</div>
        </div>
    );
};

export default TicketFilter;