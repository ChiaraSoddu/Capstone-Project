import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Abbonamenti.css'
import p1 from '../img/manubri.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { subAction } from '../redux/actions';

const CardAbb = (props) => {
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.loggedUser.state.id);
    const token = useSelector(state => state.loggedUser.state.token);
    
  
    function subscribe(){

      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token 
          }
      }
      fetch(`http://localhost:8080/subscription/?owner_id=${loggedUser}&type=${props.type}`, options)
      .then(res => res.json())
      .then(res => {console.log(res); dispatch(subAction({subtype: res.subtype, exp: res.exp, start: res.start}))})
  }
  
  
  

    

  

    return(
        <Card className='carda'>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
                <Card.Title>{props.type}</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eaque ea repellendus praesentium, maxime dolore error quaerat consequatur fugiat numquam fugit sapiente amet consequuntur obcaecati. Illo non iste facere atque.
                </Card.Text>
                <Button className='btnA' onClick={()=> subscribe()}>Abbonati</Button>
            </Card.Body>
        </Card>
    )

}

export default CardAbb;