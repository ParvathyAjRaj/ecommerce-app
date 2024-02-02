import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";


function Header(){
    return(
        <Container className="header-top">
                <Row>
                    <Col>
                        <h1>ShoeKart</h1>
                    </Col>
                    <Col className="text-end">
                        <button className="mt-10%"><IoCartOutline/></button>
                    </Col>
                </Row>
            </Container>
    )
}

export default Header;