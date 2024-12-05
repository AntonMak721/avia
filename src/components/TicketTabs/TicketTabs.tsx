import classes from './ticketTabs.module.css';

const TicketTabs = () => {
    return (
        <div className={classes.ticketTabs_wrapper}>
            <div className={classes.ticketTabs_item} >Самый дешевый</div>
            <div className={classes.ticketTabs_item}>Самый быстрый</div>
            <div className={classes.ticketTabs_item}>Оптимальный</div>
        </div>
    );
};

export default TicketTabs;