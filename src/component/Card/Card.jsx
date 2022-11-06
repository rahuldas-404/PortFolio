import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.emoji}/>
        <span>{props.heading}</span>
        <span>{props.detail}</span>
    </div>
  )
}

export default Card