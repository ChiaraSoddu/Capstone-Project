
import {Card, Image} from 'react-bootstrap';
import '../Styles/Pt.css';
import pt1 from '../img/pt1.webp';
import pt2 from '../img/pt2.jpg';
import pt3 from '../img/pt3.jpg';

const Pt = () => {

    return(
        <section className='pts'>
            <h1>I nostri Personal Trainer</h1>
            <div>
                <Card className='cardp'>
                    <Image roundedCircle src={pt1} className='pti' />
                    <Card.Body>
                        <Card.Title>Marco Rossi</Card.Title>
                    </Card.Body>
                </Card>

                <Card className='cardp'>
                    <Image roundedCircle src={pt2} className='pti'/>
                    <Card.Body>
                        <Card.Title>Paolo Tribio</Card.Title>
                    </Card.Body>
                </Card>

                <Card className='cardp'>
                    <Image roundedCircle src={pt3} className='pti'/>
                    <Card.Body>
                        <Card.Title>Sara Covizi</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )

}

export default Pt;