import React from 'react';
import classes from './ticket.module.scss';
import { ITicket } from './../../types/AppTypes';

const Ticket:React.FC <ITicket>= (ticket) => {
    function formatDateTime(dateTimeString: string) {
        const date = new Date(dateTimeString);
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',  });
        const formattedDate = new Date(date.toISOString().split('T')[0]);
        const day = String(formattedDate.getDate()).padStart(2, '0'); // День
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Месяц (нумерация с 0)
        const year = formattedDate.getFullYear(); // Год

        const russianDate = `${day}.${month}.${year}`;

        return {
            date: russianDate,
            time: formattedTime
        };
    }
    
    function formatDurations(duration: number) {
        const flightTimeInMinutes = duration; 
        
        const hours = Math.floor(flightTimeInMinutes / 60); 
        const minutes = flightTimeInMinutes % 60; 

        return {
            hours: hours,
            minutes: minutes
        };
    }
    const departureAt = formatDateTime(ticket.departure_at);
    const returnAt = formatDateTime(ticket.return_at);
    const durationTo = formatDurations(ticket.duration_to);
    const durationBack = formatDurations(ticket.duration_back);

    const formattedPrice = ticket.price.toLocaleString('ru-RU');
    const imgSrc = `https://pics.avs.io/99/36/${ticket.airline}.png`;
    
    return (
        <div className={classes.ticket_wrapper}>
            <div className={classes.ticket_header}>
                <p className={classes.ticket_info__price}>{formattedPrice} р</p>
                <img src={imgSrc} alt={imgSrc} />
            </div>
            <div className={classes.ticket_info__wrapper}>
                <div>
                    <p className={classes.ticket_info__text}>{ticket.origin} – {ticket.destination}</p>
                    <p>{departureAt.date} {departureAt.time}   </p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>В пути</p>
                    <p>{durationTo.hours} ч {durationTo.minutes} мин</p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>  пересадки</p>
                    <p>{ticket.transfers}</p>
                </div>
            </div>
            <div className={classes.ticket_info__wrapper}>
                <div>
                    <p className={classes.ticket_info__text}>{ticket.destination} – {ticket.origin}</p>
                    <p>{returnAt.date} {returnAt.time}  </p>
                </div>
                <div>
                    <p className={classes.ticket_info__text}>В пути</p>
                    <p>{durationBack.hours} ч {durationBack.minutes} мин</p>

                </div>
                <div>
                    <p className={classes.ticket_info__text}> пересадки</p>
                    <p> {ticket.return_transfers}</p>
                </div>
            </div>
           
        </div>
    );
};

export default Ticket;