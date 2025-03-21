import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import KupciPregled from './pages/kupci/KupciPregled'
import KupciDodaj from './pages/kupci/KupciDodaj'
import KupciPromjena from './pages/kupci/KupciPromjena'
import StickyFooter from './services/indexfooter';
import EraDijagram from './pages/EraDijagram'



function App() {

  return (
    <>
    <dev>
    <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "rgb(255, 0, 242)",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgb(255, 0, 212)",
    padding: "2rem"
    }}
    
>
    LOLtrgovina
</StickyFooter>
</dev>
      <Container>
        <NavBarEdunova />
        <div className='pocetna'>
          <Routes>
            <Route path={RouteNames.HOME} element={<Pocetna />} />
            <Route path={RouteNames.KUPAC_PREGLED} element={<KupciPregled />} />
            <Route path={RouteNames.KUPAC_NOVI} element={<KupciDodaj />} />
            <Route path={RouteNames.KUPAC_PROMJENA} element={<KupciPromjena />} />
            <Route path={RouteNames.ERA} element={<EraDijagram />} /> 
          </Routes>
        </div>
        <hr />
        
        &copy; LOLtrgovina
      </Container>
     
    </>
  )
  
}

export default App
