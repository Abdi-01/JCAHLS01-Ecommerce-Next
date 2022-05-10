import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavbarText, ButtonGroup, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '../assets/logo.png'

const NavbarComponent = (props) => {
    const [openCollapse, setOpenCollapse] = React.useState(false)

    return <div className='bg-light'>
        <Navbar color='light' className='container' light expand="md">
            <NavbarBrand style={{ cursor: "pointer" }} >
                {/* <img src={logo} width="100px" alt='logo-commerce' /> */}
                <Link href="/">
                    {/* <h5>Commerce</h5> */}
                    <Image
                        src={require("../assets/logo.png")}
                        alt="logo"
                        width="100%"
                        height="40%"
                        objectFit='contain'
                    />
                </Link>
            </NavbarBrand>
            <NavbarToggler onClick={() => setOpenCollapse(!openCollapse)} />
            <Collapse navbar isOpen={openCollapse}>
                <Nav
                    className='me-auto'
                    navbar
                >
                    <NavItem>
                        <Link href="/products">
                            <span className='nav-link'>
                                Products
                            </span>
                        </Link>

                    </NavItem>
                    <NavItem>
                        <span className='nav-link'>
                            Promo
                        </span>
                    </NavItem>
                </Nav>
                <NavbarText>

                    <ButtonGroup>
                        <Button type='button'
                            color='secondary'
                        >
                            Login
                        </Button>
                        <Button type='button'
                            color='secondary'
                            outline
                        >
                            Register
                        </Button>
                    </ButtonGroup>

                </NavbarText>
            </Collapse>
        </Navbar>
    </div>
}

export default NavbarComponent;