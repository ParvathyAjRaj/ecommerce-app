import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";


function Home(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                <div class="input-group mb-3 sm-col-7">
                    <input type="text" class="form-control" 
                            placeholder="Search here" 
                            aria-label="Search here" 
                            aria-describedby="basic-addon2"/>
                    <span class="input-group-text" id="basic-addon2">
                        <FaSearch/>
                    </span>
                </div>
                </Col>
            </Row>
        </Container>        
        </>
    )
}

export default Home;