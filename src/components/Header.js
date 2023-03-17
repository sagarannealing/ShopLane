import { useState } from "react";
import React, { useContext } from "react";

import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/ProductContext";



const Header = () => {
  const [changeColor, setChangeColor] = useState(false)
  const handleMouseEnter = () => {
    setChangeColor(true)
  }
  const handleMouseLeave = () => {
    setChangeColor(false)
  }
  const logoutStyle = {
    color: changeColor ? 'green' : 'blue'
  }
  const { cart, favourite } = useContext(AppContext);
  return (
    <Navbar bg="light" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/home">Shop Lane</NavLink>
        </Navbar.Brand>
        <Nav>

          <VscAccount color="blue" fontSize="25px" />
          <NavLink to="/" style={logoutStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Logout</NavLink>

        </Nav>
        <Nav>
          <Dropdown align={"right"}>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="none">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 150 }}>
              <NavLink to="/Cart">
                <Button
                  variant="warning"
                  style={{ width: "85%", margin: "10px 10px" }}
                >
                  Go to <FaShoppingCart />
                </Button>
              </NavLink>
              <NavLink to="/fav">
                <Button style={{ width: "85%", margin: "10px 10px" }}>
                  Go to <AiOutlineHeart /><Badge bg="none">{favourite.length}</Badge>
                </Button>
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
