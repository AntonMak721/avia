import { ITicket } from '../types/AppTypes';
import {createEvent } from 'effector'

export const updateTickets = createEvent<ITicket[]>();

export const updateTicketsSort = createEvent<'lowPrice' | 'fastest' | 'optimal'>();

export const filterCanged = createEvent<'all' |'zero'|'1'|'2'|'3'>();

export const updateVisibleItems = createEvent<number>();
