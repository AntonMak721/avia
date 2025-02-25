import { ITicket } from '../types/AppTypes';
import { createStore, combine } from 'effector'
import { filterCanged, updateTickets, updateTicketsSort } from './events';

export const $tickets = createStore<ITicket[]>([])
.on(updateTickets, (_, tickets) => tickets);

export const $ticketsSort = createStore<'lowPrice' | 'fastest' | 'optimal'>('lowPrice');
export const $ticketsFilter = createStore<'all'|'zero'|'1'|'2'|'3'>('all')

$ticketsFilter.on(filterCanged, (_, filterName) =>filterName);
$ticketsSort.on(updateTicketsSort, (_, sort) => sort);

export const $filteredAndSortedTickets = combine(
    $tickets,
    $ticketsFilter,
    $ticketsSort,
    (tickets, filters, sortType) => {
      const filteredTickets = ()=>{
        switch (filters) { 
            case 'all':  {
              return tickets;
            }
            case 'zero': {
              return [...tickets].filter(ticket => ticket.transfers === 0);
            }
            case '1': {
              return [...tickets].filter(ticket => ticket.transfers === 1);
            }
            case '2': {
              return [...tickets].filter(ticket => ticket.transfers === 2);
            }
            case '3': {
              return [...tickets].filter(ticket => ticket.transfers === 3);
            }
            default: {
              return tickets;
            }
          }
      }
      const filteredTicketsArray = filteredTickets();
      if (sortType === 'lowPrice') {
        filteredTicketsArray.sort((a, b) => a.price - b.price);
      } else if (sortType === 'fastest') {
        filteredTicketsArray.sort((a, b) => a?.duration - b?.duration);
      } else if (sortType === 'optimal') {
        filteredTicketsArray.sort((a, b) => a.price / a.duration - b.price / b.duration);
      }
    return filteredTickets;
    }
)
