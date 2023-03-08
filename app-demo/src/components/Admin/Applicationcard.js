import React from 'react'

function Applicationcard(props) {
  return (
    <div className="border p-2 m-3 rounded">
    <div>
        
        <p><strong>Name: </strong> {props.application.name}</p>
        <p><strong>Email: </strong> {props.application.email}</p>
        <p><strong>Message: </strong> {props.application.message}</p>
    </div>
    <div>
      <button type="button" className="btn btn-primary btn-sm">
        Approve button
      </button>
      <button type="button" className="btn btn-danger btn-sm mx-2">
        Reject button
      </button>
    </div>
  </div>
  )
}

export default Applicationcard