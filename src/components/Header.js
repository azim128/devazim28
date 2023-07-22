import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomButton from './utility/customButton';

import './style/header.css';
const Header = () => {
  return (
    <Navbar className='header-nav' expand="lg">
      <Container>
        <Navbar.Brand className='text-white' href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='ms-auto'>
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <Nav.Link href="/portfolio" className='text-white'>Portfolio</Nav.Link>
            <div className='my-1'><CustomButton text='Resume' link='/resume' variant='info' size='sm' classname='text-white'/></div> 
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default Header;