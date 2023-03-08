import React from 'react'

function Card(props) {
  return (
    <div className="card p-4 border-0" style={{ width: "18rem" }}>
    <img
      src={props.img}
      className="card-img-top rounded-circle mx-auto"
      alt="..."
      style={{ width: "150px", height: "150px" }}
    />
    <div className="card-body text-center">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">
       {props.desc}
      </p>
    </div>
  </div>
  

  )
}

export default Card