import React from "react"

export default function rangeEl({value, setRangeVal}) {
    
    return (
        <div>
            <label for="customRange3" className="form-label mx-3 mb-0 mt-3">Password range: {value}</label>
            <input onChange={(e) => setRangeVal(e.target.value)} type="range" class="form-range mx-3 mt-0 mb-3" min="8" max="30" step="1" id="customRange3"/>
        </div>
    )
}