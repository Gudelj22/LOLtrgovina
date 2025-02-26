import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import moment from "moment";
import KupacService from "../../services/KupacService";
import { useEffect, useState } from "react";


export default function KupciPromjena(){

    const navigate = useNavigate();
    const [kupac,setKupac] = useState({});
    const routeParams = useParams();

    async function dohvatiKupac(){
        const odgovor = await KupacService.getBySifra(routeParams.sifra)

        
        setKupac(odgovor)
    }

    useEffect(()=>{
        dohvatiKupac();
    },[])

    async function promjena(kupac){
        const odgovor = await KupacService.promjena(routeParams.sifra,kupac);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.KUPAC_PREGLED)
    }

    function odradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server pa standardnom načinu

        let podaci = new FormData(e.target);

        promjena(
            {
                ime: podaci.get('ime'),
                prezime: podaci.get('prezime'),
                godine: parseInt(podaci.get('godine'),),
                oib: podaci.get('oib'),
            }
        );
    }

    return(
    <>
    Promjena kupca
    <Form onSubmit={odradiSubmit}>

    <Form.Group controlId="ime">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" name="ime" required defaultValue={kupac.ime}/>
        </Form.Group>

        <Form.Group controlId="prezime">
            <Form.Label>Prezime</Form.Label>
            <Form.Control type="text" name="prezime" required  defaultValue={kupac.prezime}/>
        </Form.Group>

        <Form.Group controlId="godine">
            <Form.Label>Godine</Form.Label>
            <Form.Control type="number" name="godine" required  defaultValue={kupac.godine}/>
        </Form.Group>

        <Form.Group controlId="oib">
            <Form.Label>OIB</Form.Label>
            <Form.Control type="text" name="oib" required  defaultValue={kupac.oib}/>
        </Form.Group>

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                <Link
                to={RouteNames.KUPAC_PREGLED}
                className="btn btn-danger siroko"
                >Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Promjeni kupca
                </Button>
            </Col>
        </Row>


    </Form>




   
    </>
    )
}