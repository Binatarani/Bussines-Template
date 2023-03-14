import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../../images/logo.png";
import Logo1 from "../../images/logo-white.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header-area">
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="" className="d-none d-lg-inline-block" />
            <img src={Logo1} alt="d-inline-block d-lg-none" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              {user ? (
                <Button
                  className="nav-link btn1 btn-primary text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              ) : (
                <NavLink to="/login" className="nav-link btn btn-primary">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
