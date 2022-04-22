import React from 'react'
import './ExecutiveBoard.css'
import Card from '../Council/Council_card/Card'
import Exec1 from './Image/Exec1.jpeg'
import Exec2 from './Image/Exec2.jpg'
import Exec3 from './Image/Exec3.jpg'

function ExecutiveBoard() {
  return (
    <div className='Executive-Board'>
      <div class="council_heading_container">
                <h3 class="headingsize">EXECUTIVE&nbsp;<span id="timelinecolor">BOARD</span></h3>
                </div>
      <section className="Council-Card-Container">     
        <Card
          class="Exec-Card"
          image={Exec1}
          name="Aman Verma"
          designation="Speaker"/>
        <Card
          class="Exec-Card"
          image={Exec2}
          name="Soham Ahuja"
          designation="Deputy Speaker"/>
        <Card
          class="Exec-Card"
          image={Exec3}
          name="Pradyumn Agarwal"
          designation="Scribe"/>
        </section>
    </div>
  )
}

export default ExecutiveBoard