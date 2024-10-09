import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  return (
    <>
    <div className='container-fluid bg-body-secondary'>
    <Navbar expand="md" className="">
      <Container fluid>
        <Navbar.Brand href="/">EduMaster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/courses">Course 1</NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                Course 2
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/courses">
                Course 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center">
          <Dropdown  width="20" height="20">
              <Dropdown.Toggle variant="outline-info" id="dropdown-basic" className='m-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
                
              </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/studentPortal">Student Portal</Dropdown.Item>
              <Dropdown.Item href="/teacherPortal">Teacher Portal</Dropdown.Item>
              <Dropdown.Item href="/adminPanel">Admin Panel</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavBar