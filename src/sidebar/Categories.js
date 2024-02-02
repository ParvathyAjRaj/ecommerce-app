import React from "react";

function Categories(){
    return(<>
        <h5 className="sidebar-category-title">Category</h5>
        <div>
            <label className="sidebar-category-label">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span>All
            </label>
            <label className="sidebar-category-label">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span>Sneakers
            </label>
            <label className="sidebar-category-label">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span>Flats
            </label>
            <label className="sidebar-category-label">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span>Sandals
            </label>
            <label className="sidebar-category-label">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span>
            </label>
        </div>
    </>)
}

export default Categories;