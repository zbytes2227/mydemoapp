import React from 'react'

function Homecards(props) {
  return (
    <div className="col border p-2 ">
    <h1 className='mb-0'>{props.value}</h1>
    <p className='mb-0' >{props.name}</p>
  </div>
  )
}

export default Homecards