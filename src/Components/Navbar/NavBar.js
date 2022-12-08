import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" className="nav-bar">
      <Navbar.Brand href="#home"><img className="logo" src="/images/Hack-krmu-logo.png" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link className="nav-link" href="#home">About</Nav.Link>
          <Nav.Link className="nav-link" href="#link">Themes</Nav.Link>
          <Nav.Link className="nav-link" href="#link">Prize</Nav.Link>
          <Nav.Link className="nav-link" href="#link">Schedule</Nav.Link>
          <Nav.Link className="nav-link" href="#link">Team</Nav.Link>
          <Nav.Link className="nav-link" href="#link">FAQs</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
