import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import './Navbar.css'
// import logo from '../../../assets/logo/logo.png'
import { useState } from "react";

const NavbarMenu = () => {
    const [nav, setNav] = useState(false)
    //scroll navbar
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 50 ? setNav(true) : setNav(false)
    }
    window.addEventListener('scroll', changeValueOnScroll);

    return (
        <header>
            <Navbar collapseOnSelect expand='lg' className={`${nav === true ? 'sticky' : ""}`}>
                <Container>
                    <Navbar.Brand ><Link to='home' spy={true}
                        smooth={true}
                        duration={500} className="logo">
                        <img src='https://i.ibb.co/sg8Nccm/logo.png' alt="logo" className="img-fluid" />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                to='home' >Home</Nav.Link>
                            <Nav.Link as={Link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                to='about'>About</Nav.Link>
                            <Nav.Link as={Link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                to='menu'>Our Menu</Nav.Link>
                            <Nav.Link as={Link} to='shop'>Shop</Nav.Link>
                            <Nav.Link as={Link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                to='contact'>Contact</Nav.Link>
                            {/* <Nav.Link as={Link} to='/'><div className="card"><i className="bi bi-bag fs-5"></i>
                                <em className="roundpoint">2</em>
                            </div></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
};

export default NavbarMenu;