import slika from '../assets/LoL.jpg'

export default function Pocetna(){
    return(
        <>
        Dobro došli na moju aplikaciju 
        <img src={slika} alt="LOL" className='slika'/>
        </>
    )
}