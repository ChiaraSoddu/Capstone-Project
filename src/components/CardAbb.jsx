import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Abbonamenti.css'
import p1 from '../img/manubri.jpg'
import { useSelector } from 'react-redux';

const CardAbb = (props) => {

    const loggedUser = useSelector((state) => state.loggedUser)

    function Subscribe(){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcmFjYW1wIiwiaWF0I…Q9gx9kyBYtBFnN6QDC-ooj1k87Epy-E45ntAq6_kUj6N387yA' 
            },
            body: JSON.stringify({type: props.type, owner_id: loggedUser.getUserId()})
        }

        fetch("https://localhost:8080/subscription/")
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