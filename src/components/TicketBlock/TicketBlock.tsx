import React from 'react';
import Ticket from '../Ticket/Ticket'
import { ITicket } from './../../types/AppTypes';

interface Props {
    tickets: ITicket[];
  }
  

const TicketBlock:React.FC<Props> = ({tickets}) => {
    return (
        <div>
            {tickets.map(ticket => {return <Ticket {...ticket} key={ticket.id} />})}
           
        </div>
    );
};

export default TicketBlock;