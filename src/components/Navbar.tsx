import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'

const TopNavbar = ()=>{
    return(
        <div>
            <Navbar collapseOnSelect expand='sm' bg='light' variant='light'>
           <Container>
               <Navbar.Brand className='row'>
                    <img  src={logo} className='responsive'  height="60" alt="" />
               </Navbar.Brand>
            </Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='p-2'>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="services">Services</Nav.Link>
                        <Nav.Link href="contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
       </Navbar>
       
        </div>
       
    );
}

export default TopNavbar;