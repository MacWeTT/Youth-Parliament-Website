import React from 'react';
import Card from './Council_card/Card';
import'./Council.css';
import Council1 from './Images/Council1.jpg'
import Council2 from './Images/Council2.jpg'
import Council3 from './Images/Council3.jpg'
import Council4 from './Images/Council4.jpg'
import Council5 from './Images/Council5.jpeg'
import Council6 from './Images/Council6.jpg'
import Council7 from './Images/Council7.jpg'
import Council8 from './Images/Council8.jpg'
import Council9 from './Images/Council9.jpg'

const Council = () => {
  return (
    <div className='Council-Section'>
      <div class="council_heading_container">
                <h3 class="headingsize">MEET OUR&nbsp;<span id="timelinecolor">COUNCIL MEMBERS</span></h3>
                </div>
      <section className="Council-Card-Container">     
        <Card
          image={Council1}
          name="Janki Insan"
          designation="President"/>
        <Card
          image={Council2}
          name="Aditya Saxena"
          designation="Vice-President"/>
        <Card
          image={Council3}
          name="Simran Gohan"
          designation="Advisor"/>
        <Card
          image={Council4}
          name="Mahima Thakur"
          designation="Editor In-Chief"/>
        <Card
          image={Council5}
          name="Varsha Singh"
          designation="Research Head"/>
        <Card
          image={Council6}
          name="Ananya Joshi"
          designation="Conference Affairs"/>
        <Card
          image={Council7}
          name="Sagrika Gargya"
          designation="IP Head"/>
        <Card
          image={Council8}
          name="Suveer Sharma"
          designation="Delegate Affairs"/>
        <Card
          image={Council9}
          name="Ravi Srivastava"
          designation="Delegate Affairs"/>
      </section>
      </div>
  )
}

export default Council;