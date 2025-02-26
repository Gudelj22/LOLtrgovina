import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import moment from "moment";
import KupacService from "../../services/KupacService";


export default function KupciDodaj(){

    const navigate = useNavigate();

    async function dodaj(kupac){
        const odgovor = await KupacService.dodaj(kupac);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.KUPAC_PREGLED)
    }

    function odradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server pa standardnom načinu

        let podaci = new FormData(e.target);

        dodaj(
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
    Dodavanje kupca
    <Form onSubmit={odradiSubmit}>

        <Form.Group controlId="ime">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" name="ime" required />
        </Form.Group>

        <Form.Group controlId="prezime">
            <Form.Label>Prezime</Form.Label>
            <Form.Control type="text" name="prezime" required />
        </Form.Group>

        <Form.Group controlId="godine">
            <Form.Label>Godine</Form.Label>
            <Form.Control type="number" name="godine" required />
        </Form.Group>

        <Form.Group controlId="oib">
            <Form.Label>OIB</Form.Label>
            <Form.Control type="text" name="oib" required />
        </Form.Group>

        <hr/>

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                <Link
                to={RouteNames.KUPAC_PREGLED}
                className="btn btn-danger siroko"
                >Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Dodaj kupca
                </Button>
            </Col>
        </Row>


    </Form>




   
    </>
    )
}