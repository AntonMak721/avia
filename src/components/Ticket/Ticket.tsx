import React from 'react';
import classes from './ticket.module.css';
import { ITicket } from './../../types/AppTypes';

const Ticket:React.FC <ITicket>= (ticket) => {
    return (
        <div className={classes.ticket_wrapper}>
            <div className={classes.ticket_header}>
                <p className={classes.ticket_info__price}>{ticket.price} руб.</p>
                <img src="./S7 Logo.png" alt="" />
            </div>
            <div className={classes.ticket_info__wrapper}>
                <div>
                    <p className={classes.ticket_info__text}>{ticket.origin} – {ticket.destination}</p>
                    <p>{ticket.departure_time} – {ticket.arrival_time}</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>В пути</p>
                    <p>21ч 15м</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>{ticket.stops} пересадки</p>
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