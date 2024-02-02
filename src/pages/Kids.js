import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FaFilter } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import "./Kids.css";
import { FaSearch } from "react-icons/fa";

function Kids(){

    return(
        <div className="content">
        <Container>
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
        </Container>
        <Container className="card-container">
            <Row>
                <Col className="col-lg-4">
                <div className="card">
                    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className="card-img-top" alt="shoe image"/>
                    <div className="card-body">
                        <h5 className="card-title">Nike Air Monarch IV</h5>
                        <section>
                            <p className="card-text">
                                <AiFillStar className="rating-star"/>
                                <AiFillStar className="rating-star"/>
                                <AiFillStar className="rating-star"/>
                                <AiFillStar className="rating-star"/>
                            </p>
                            <span className="total-reviews">123 reviews</span>
                        </section>
                        <section>
                            <div className="price">
                                <del>$200</del>
                                <div>$100</div>
                            </div>
                        </section>
                        <a href="#" class="btn btn-primary">Add to cart</a>
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
            </Row>
        </Container>
        </div>
        
        
        
    );
}

export default Kids;