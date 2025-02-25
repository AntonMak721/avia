import {ITicket } from '../types/AppTypes';
import { createEffect } from 'effector';
import { updateTickets } from './events';

const token = 'token';
const urlCORSAnyWhere = `http://localhost:8080/http://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LED&destination=JFK&departure_at=2025-05-12&return_at=2025-05-27&unique=false&sorting=price&direct=false&currency=rub&limit=30&page=1&one_way=true&token=${token}`;

export const fetchTicketsFx = createEffect<void, ITicket[]>(async () => {
    const response = await fetch(urlCORSAnyWhere);
    const jsonResponse = await response.json();
    const data = jsonResponse.data;
    return data;
});

fetchTicketsFx.doneData.watch((tickets) => {
    updateTickets(tickets);
});

fetchTicketsFx.failData.watch((error) => {
    console.log(error.message);
});