import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href='/'>Invoice Service</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Clients" id="basic-nav-dropdown">
                            <Nav.Link as={Link} to='FormClient'>Add Client</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link as={Link} to='TableClient'>Customers</Nav.Link>
                        </NavDropdown>

                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <Nav.Link as={Link} to='FormProject'>Add Project</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link as={Link} to='TableProject'>Projects</Nav.Link>
                        </NavDropdown>


                        <Nav.Link as={Link} to='TableInvoices'>Invoices</Nav.Link>

                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <NavDropdown.Item href="login">Change User</NavDropdown.Item>

                            <NavDropdown.Item href="login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default ColorSchemesExample;
