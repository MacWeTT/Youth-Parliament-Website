import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div>  
        <div class="Council-card">
          <img class="Council-card-img" src={props.image} />
          <h2>{props.name} </h2>
          <h3> {props.designation}</h3>
        </div>
    </div>
  )
}

export default Card