import React from "react";
import "./Shoes.css"

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card">
        <img src={img} className="img"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
            </div>
            <div className="card-price">
                <div className="price">
                    <del>{prevPrice}</del> {newPrice}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;