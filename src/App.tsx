import TransferBlock from './components/TransferBlock/TransferBlock'
import TicketBlock from './components/TicketBlock/TicketBlock'
import TicketTabs from './components/TicketTabs/TicketTabs'
import './App.css'
import Button from './components/Button/Button'
import {search} from './services/service'
import {tickets} from './../public/tickets'




function App() {
  return (
    <>
      <img id="logo" src="/Logo.svg" alt="Logo" />
      <section className='container'>
        <TransferBlock />
        <div >
          <TicketTabs />
          <TicketBlock tickets={tickets} />
          <Button/>
          <button onClick={search}>Search</button>
        </div>
      </section>
    </>
  )
}

export default App