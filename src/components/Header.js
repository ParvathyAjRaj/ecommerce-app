import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import "../index.css";
import { Link } from "react-router-dom";


function Header(){  

    return(
        <Container className="header-top">
                <Row  className="shoekart">
                    <Col className="heading" sm={6}>
                        <h1>ShoeKart</h1>
                    </Col>
                    <Col className="text-end" sm={3}>
                        <Link to="/">Home</Link>
                    </Col>
                    <Col className="text-end" sm={3}>
                        <Link to="/cart"><IoCartOutline/></Link>
                    </Col>
                </Row>
            </Container>
    )
}

export default Header;