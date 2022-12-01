import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Abbonamenti.css'
import p1 from '../img/manubri.jpg'

const Abbonamenti =()=> {
    return(
        <section className='sa'>
    <Card className='carda'>
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Abbonamento Mensile</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, rerum modi et sapiente fugiat voluptatum nobis esse consequuntur libero. Distinctio expedita numquam unde veritatis accusamus cumque in blanditiis nulla dolore.
        </Card.Text>
        <Button className='btnA'>Abbonati</Button>
      </Card.Body>
    </Card>

    <Card className='carda'>
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Abbonamento Semestrale</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum tempora aliquid, officia praesentium explicabo, delectus repellendus sit, expedita vel earum impedit. Quasi quod quia dolor nulla mollitia laboriosam laborum?
        </Card.Text>
        <Button className='btnA'>Abbonati</Button>
      </Card.Body>
    </Card>
    
    <Card className='carda'>
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Abbonamento Annuale</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eligendi debitis molestias sint, deserunt dicta ratione tempore dolores qui, vero ipsam excepturi eaque est, reprehenderit distinctio modi? Ullam, voluptatibus illo.
        </Card.Text>
        <Button className='btnA'>Abbonati</Button>
      </Card.Body>
    </Card>
        </section>
    )
}

export default Abbonamenti;