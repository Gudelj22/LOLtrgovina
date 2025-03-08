import slikamobile from '../assets/LoLmobile.jpg'
import slika from '../assets/LoL.jpg'

// https://getbootstrap.com/docs/4.0/utilities/display/

export default function Pocetna(){
    return(
        <>
        Dobro došli na moju aplikaciju 
        <img src={slika} alt="LOL" className='.d-none .d-xl-block slika'/>
        <img src={slikamobile} alt="LOL" className='.d-none .d-sm-block .d-md-none slika'/>
        </>
    )
}