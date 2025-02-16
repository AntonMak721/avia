import React from "react";
import {useState, useEffect } from 'react'
import TransferBlock from './components/TransferBlock/TransferBlock'
import TicketBlock from './components/TicketBlock/TicketBlock'
import TicketTabs from './components/TicketTabs/TicketTabs'
import './App.css'
import { getTickets} from './services/service'
import { ITicket, IData } from './types/AppTypes'


function App() {
  const [tickets, setTickets] = useState(Array<ITicket>());
  const [sort, setSort] = useState('lowPrice')
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    const data:IData = await getTickets()
    setTickets(data?.data);
  }

  const sortTicketsLowPrice = ():void => {
    const sortedTicketsLowPrice = [...tickets].sort((a, b) => a?.price -b?.price  );
    setTickets(sortedTicketsLowPrice);
    setSort('lowPrice');
  }

  const sortTicketsFastest  = ():void => {
    const sortedTicketsFastest = [...tickets].sort((a, b) => a?.duration - b?.duration);
    setTickets(sortedTicketsFastest);
    setSort('fastest');
  }

  const sortTicketsOptima = () => {
          function sortedTickets (tickets:ITicket[], weights = { price: 0.5, duration: 0.5, transfers: 0.3}) {
              const calculateScore = (ticket:ITicket) => (
                weights.price * ticket.price +
                weights.duration * ticket.duration +
                weights.transfers * ticket.transfers
              );
              return [...tickets].slice().sort((a, b) => calculateScore(a) - calculateScore(b));
            }
    setTickets(sortedTickets);
    setSort('optima');
  }

  const filterTicketsByTransfers = (tickets:ITicket[]):ITicket[] => {
    switch (filter) { 
      case 'all':  {
        return tickets;
        setFilter('all');
      }
      case '0': {
        return [...tickets].filter(ticket => ticket.transfers === 0);
        console.log('0 пересадок');
        setFilter('0');
      }
      case '1': {
        return [...tickets].filter(ticket => ticket.transfers === 1);
        setFilter('1');
      }
      case '2': {
        return [...tickets].filter(ticket => ticket.transfers === 2);
        setFilter('2');
      }
      case '3': {
        return [...tickets].filter(ticket => ticket.transfers === 3);
        setFilter('3');
      }
      default: {
        return tickets;
        setFilter('all');
      }
    }
  }
  const filteredTickets:ITicket[] = filterTicketsByTransfers(tickets);
  
  return (
    <>
      <img id="logo" src="/Logo.svg" alt="Logo" />
      <section className='container'>
        <TransferBlock
        setFilter={setFilter}
        filter={filter}
        />
        <div >
          <TicketTabs 
            onSortTicketsLowPrice={sortTicketsLowPrice}
            onSortTicketsFastest={sortTicketsFastest}
            onSortTicketsOptima={sortTicketsOptima}
            sort={sort}
          />
          <TicketBlock tickets={filteredTickets} />
        </div>
      </section>
    </>
  )
}

export default App