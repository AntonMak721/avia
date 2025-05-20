import {ITicket, IData } from '../types/AppTypes';
import { createEffect } from 'effector';
import { updateTickets } from './events';

const token = 'token';
const urlCORSAnyWhere = `http://localhost:8080/http://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LED&destination=MOW&departure_at=2025-07-12&return_at=2025-07-27&unique=false&sorting=price&direct=false&currency=rub&limit=30&page=1&one_way=true&token=${token}`;

export const fetchTicketsFx = createEffect<void, ITicket[]>(async () => {
    const response = await fetch(urlCORSAnyWhere, {
        headers: {
            "Accept": "application/json", // Явно запрашиваем JSON
            'Content-Type': 'application/json',
        },
    });

    const contentType = response.headers.get("Content-Type");
    if (!contentType?.includes("application/json")) {
        const errorData = await response.text(); // Читаем ответ как текст
        throw new Error(`Expected JSON, got ${contentType}. Response: ${errorData.slice(0, 100)}...`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.data;
});

fetchTicketsFx.doneData.watch((tickets) => {
    updateTickets(tickets);
});

fetchTicketsFx.failData.watch((error) => {
    console.log(`ERROR __!!__: ${error.message}`);
});
