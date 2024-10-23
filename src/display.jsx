import React from "react";

export default function Display({ value }) {
  return (
    <>
      <div className="card-body bg-light mt-3 mb-2 rounded">
        <h6 className="card-title text-black">{value}</h6>
      </div>
    </>
  );
}
