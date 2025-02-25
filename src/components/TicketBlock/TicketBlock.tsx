import React, { useState } from 'react';
import Ticket from '../Ticket/Ticket'
import { ITicket } from './../../types/AppTypes';
import Button from '../Button/Button';
import classes from './ticketBlock.module.scss';



interface Props {
    tickets: ITicket[];
  }
  

const TicketBlock:React.FC<Props> = ({tickets}) => {
    const [visibleItems, setVisibleItems] = useState(5);
    const limitedData = tickets.slice(0, visibleItems);
    const handleShowMore = () => {
      setVisibleItems(prev => prev + 5); 
    };
  
    return (
        <div>
            {limitedData.map(ticket => {return <Ticket {...ticket} key={ticket.link} />})}
            {tickets.length < 1 && 
            <div className={classes.zeroTicketTitleWrapper}>
                <p>Пу Пу Пу....</p>
                <p>Скоро здесь будут билеты...</p>
             </div>}
            {tickets.length > visibleItems && (
                <Button onClick={handleShowMore}/>
            )}
            {/* {tickets.map(ticket => {return <Ticket {...ticket} key={ticket.link} />})} */}
        </div>
    );
};

export default TicketBlock;