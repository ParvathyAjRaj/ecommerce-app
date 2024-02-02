import React from "react";

function Categories({handleFilter}){
    return(<>
        <h5 className="sidebar-category-title">Category</h5>
        <div>
            <label className="sidebar-category-label">
                <input onChange={handleFilter} type="radio" name="test" value = ''></input>
                <span className="checkmark"></span>All
            </label>
            <label className="sidebar-category-label">
                <input onChange={handleFilter} type="radio" name="test" value="sneakers"></input>
                <span className="checkmark"></span>Sneakers
            </label>
            <label className="sidebar-category-label">
                <input onChange={handleFilter} type="radio" name="test" value="flats"></input>
                <span className="checkmark"></span>Flats
            </label>
            <label className="sidebar-category-label">
                <input onChange={handleFilter} type="radio" name="test" value="sandals"></input>
                <span className="checkmark"></span>Sandals
            </label>
            <label className="sidebar-category-label">
                <input onChange={handleFilter} type="radio" name="test" value="heels"></input>
                <span className="checkmark"></span>Heels
            </label>
        </div>
    </>)
}

export default Categories;