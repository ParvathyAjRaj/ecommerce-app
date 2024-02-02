import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./Shoes.css"

import { FaSearch } from "react-icons/fa";

function Shoes({result,handleSearch}){

    return(
        <>
        <Container>
            <Col>
                <div class="input-group mb-3 sm-col-7">
                    <input type="text" class="form-control" 
                        placeholder="Search here" 
                        aria-label="Search here" 
                        aria-describedby="basic-addon2"
                        onChange={handleSearch}
                        />  
                    <span class="input-group-text" id="basic-addon2">
                        <FaSearch/>
                    </span>
                </div>
            </Col>
        </Container>
        <Container>
            <Row>
                <Col>
                    {result}
                </Col>
            </Row>
        </Container>
        </>    
    );
}

export default Shoes;

                {/* <Col className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Col>
                <Col className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Col>
                <Col className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Col>
                <Col className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Col>
                <Col className="col-lg-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </Col> */}
            