import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import "../stylesheets/NavBar.css";
import "/style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "react-bootstrap";

const NavBar = () => {
  const handleClick = () => {
    // define elements
    const appTitle = document.querySelector("#title");
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeIcon = document.querySelector(".close-svg");

    // Toggle classes to display/hide elements
    appTitle.classList.toggle("no-display");
    closeIcon.classList.toggle("display");
    hamburger.classList.toggle("hamburger");
    hamburger.classList.toggle("no-display");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
      navbar.classList.toggle("transparent");
    } else {
      navLinks.style.display = "block";
      navbar.classList.toggle("transparent");
    }
  };
  const returnHeight = () => {
    const navBar = document.querySelector(".navbar");
    const navHeight = navBar.offsetHeight;
    return `${navHeight}px`;
  };
  const stuff = "</ Javay Porter >";
  return (
    <Navbar className="the-navbar" fixed="top">
      <Container>
        <Navbar.Brand id="title" href="/">
          {stuff}
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/experience">Experience</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Button className="subscribe-btn">Subscribe</Button>
        </Nav>
        <div className="nav-svgs" onClick={() => handleClick()}>
          <GiHamburgerMenu className="hamburger" id="hamburger" />
          <AiOutlineClose className="close-svg" />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
