import React from "react";
import { useEffect } from 'react'
import TransferBlock from './components/TransferBlock/TransferBlock'
import TicketBlock from './components/TicketBlock/TicketBlock'
import TicketTabs from './components/TicketTabs/TicketTabs'
import './App.css'
import { ITicket} from './types/AppTypes'
import { useUnit} from 'effector-react';
import { $filteredAndSortedTickets} from "./store/store";
import { fetchTicketsFx } from "./store/effects";


export const App: React.FC = () => {

  const ticketsFetchEffector = useUnit(fetchTicketsFx);
  const ticketsFiltredAndSorted = useUnit($filteredAndSortedTickets);
  
  useEffect(() => {
    ticketsFetchEffector()
  }, [ticketsFetchEffector])

  const filteredTickets:ITicket[] = ticketsFiltredAndSorted();
  
  return (
    <>
      <img id="logo" src="/Logo.svg" alt="Logo" />
      <section className='container'>
        <TransferBlock/>
        <div >
          <TicketTabs/>
          <TicketBlock tickets={filteredTickets} />
        </div>
      </section>
    </>
  )
}

export default App