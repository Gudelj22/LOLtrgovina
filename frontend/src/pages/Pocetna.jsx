import slikamobile from '../assets/LoLmobile.jpg'
import slika from '../assets/LoL.jpg'

// https://getbootstrap.com/docs/4.0/utilities/display/

// čitaj
// https://www.npmjs.com/package/react-sticky-footer



export default function Pocetna(){
    return(
    <>
   
   
    
    
        <img src={slika} alt="LOL" className='d-none d-md-block d-lg-block d-xl-block w-100'/>
        <img src={slikamobile} alt="LOL" className='d-block d-md-none d-lg-none w-100'/>
    </>
    )
    
}



    
 