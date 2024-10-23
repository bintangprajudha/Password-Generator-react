import React from "react";

export default function CheckEl({ value, check, change }) {
  return (
    <div className="checkboxContainer">
      <input
        className="form-check-input mt-0 ms-3 mb-2"
        type="checkbox"
        value={check}
        aria-label="Checkbox for following text input"
        onClick={() => change(!check)}
      />
      <label for="customRange3" className="form-label ms-2 mb- mt-0">
        {value}
      </label>
    </div>
  );
}
