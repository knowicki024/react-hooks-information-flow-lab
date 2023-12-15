import React, { useState } from "react";

function Filter({ onCategoryChange }) {
    const [category, setCategory] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        onCategoryChange(e.target.value);
    };

    return (
        <div className="filter">
            <select
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="">All</option>
                <option value="food">Food</option>
                <option value="drinks">Drinks</option>
            </select>
        </div>
    );
}

export default Filter;
