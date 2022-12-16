import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Abbonamenti.css'
import p1 from '../img/manubri.jpg'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CardAbb = (props) => {

    const [owner_id, setOwner_id] = useState();
    const [type, setType] = useState();

    const loggedUser = useSelector((state) => state.loggedUser)

    function Subscribe(){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcmFjYW1wIiwiaWF0I…Q9gx9kyBYtBFnN6QDC-ooj1k87Epy-E45ntAq6_kUj6N387yA' 
            }
        }

        fetch(`http://localhost:8080/subscription/?owner_id=${owner_id}&type=${type}`, options)
        .then(res => res.json())
        .then(res => console.log(res))
    }


    return(
        <Card className='carda'>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                <Button className='btnA'>Abbonati</Button>
            </Card.Body>
        </Card>
    )

}

export default CardAbb;