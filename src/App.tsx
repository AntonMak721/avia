import TransferBlock from './components/TransferBlock/TransferBlock'
import TicketBlock from './components/TicketBlock/TicketBlock'
import TicketFilter from './components/TicketFilter/TicketFilter'
import './App.css'
import Button from './components/Button/Button'



function App() {
  return (
    <>
      <img id="logo" src="/Logo.png" alt="Logo" />
      <section className='container'>
        <TransferBlock />
        <div >
          <TicketFilter />
          <TicketBlock />
          <Button/>
        </div>
      </section>
    </>
  )
}

export default App