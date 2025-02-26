import { useEffect, useState } from "react"
import KupacService from "../../services/KupacService"
import { Button, Table } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { GrValidate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function KupciPregled(){

    const[kupci, setKupci] = useState();
    const navigate = useNavigate();

    async function dohvatiKupce(){
        const odgovor = await KupacService.get()
        setKupci(odgovor)
    }

    // hooks (kuka) se izvodi prilikom dolaska na stranicu Kupci
    useEffect(()=>{
        dohvatiKupce();
    },[])


  

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeKupca(sifra);
    }

    async function brisanjeKupca(sifra) {
        const odgovor = await KupacService.obrisi(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiKupce();
    }


    return(
        <>
        <Link
        to={RouteNames.KUPAC_NOVI}
        className="btn btn-success siroko"
        >Dodaj novog kupca</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Godine</th>
                    <th>OIB</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {kupci && kupci.map((kupac,index)=>(
                    <tr key={index}>
                        <td>
                            {kupac.ime}
                        </td>
                        <td>
                            {kupac.prezime}
                        </td>
                        <td>
                            {kupac.godine}
                        </td>
                        <td>
                            {kupac.oib}
                        </td>
                        <td>
                            <Button
                            onClick={()=>navigate(`/kupci/${kupac.sifra}`)}
                            >Promjena</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(kupac.sifra)}
                            >Obriši</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )


}