import React from 'react'
import Card from 'react-bootstrap/Card'
import Buttond from './Buttond'
import './comp.css'

function Box(props) {

 
    return (
  <div>
      
    <Card style={{ borderRadius: '7%', width: '18rem', marginTop: '2em', marginLeft: '2em', float:'left', display:'flex'}}>
      <Card.Body>
        <div className="avtr"><h3 >{props.name.slice(0, 1)}</h3></div>
        <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          {props.username}<br/>
          <Card.Link href="#">{props.email}</Card.Link>
          </Card.Text>
    
        <Buttond id={props.id}/>
      </Card.Body>
    </Card>
        </div>
    )
}

export default Box;
