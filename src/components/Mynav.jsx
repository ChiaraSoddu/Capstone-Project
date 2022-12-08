
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';

const MyNav = () => {
  return   (
  <section>
    <Navbar  className='fixed-top'  expand='lg' bg='black' variant='dark '>
        <Container>
        <Navbar.Brand  className='mt-0' href="/">GYM-APP</Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' >
            <Nav.Link className='aN' href="/subscription">ISCRIVITI</Nav.Link>
              <Nav.Link className='aN' href="/abbonamenti">ABBONAMENTI</Nav.Link>
              <Nav.Link className='aN' href="/ali">ALIMENTAZIONE</Nav.Link>
              <Nav.Link className='aN' href="/profile"><CgProfile style={{width: '5rem', color: 'orange'}}/></Nav.Link>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </section>
  );
}



export default MyNav;;