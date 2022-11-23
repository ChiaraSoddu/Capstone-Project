
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => {
  return   (
  <section>
    <Navbar  className='fixed-top'  expand='lg' bg='black' variant='dark '>
        <Container collapseOnSelect>
        <Navbar.Brand  className='mt-0' href="#home">ICONA PALESTRA</Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' >
            <Nav.Link className='aN' href="#features">ISCRIVITI</Nav.Link>
            <Nav.Link className='aN' href="#pricing">PALESTRE</Nav.Link>
              <Nav.Link className='aN' href="#action/3.1">ABBONAMENTI</Nav.Link>
              <Nav.Link className='aN' href="#action/3.2">ATTIVITÀ E CORSI
              </Nav.Link>
                
              <Nav.Link className='aN' href="#action/3.3">LA NOSTRA APP</Nav.Link>
              
             
              <Nav.Link className='aN' href="#">ICONA PROFILO</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </section>
  );
}



export default MyNav;;