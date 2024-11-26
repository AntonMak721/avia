import classes from './ticket.module.css';

const Ticket = () => {
    return (
        <div className={classes.ticket_wrapper}>
            <div className={classes.ticket_header}>
                <p className={classes.ticket_info__price}>13 400 Р</p>
                <img src="./S7 Logo.png" alt="" />
            </div>
            <div className={classes.ticket_info__wrapper}>
                <div>
                    <p className={classes.ticket_info__text}>MOW – HKT</p>
                    <p>10:45 – 08:00</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>2 пересадки</p>
                    <p>HKG, JNB</p>
                </div>
            </div>
            <div className={classes.ticket_info__wrapper}>
                <div>
                    <p className={classes.ticket_info__text}>MOW – HKT</p>
                    <p>11:20 – 00:50</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>В пути</p>
                    <p>13ч 30м</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>1 пересадки</p>
                    <p>HKG</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;