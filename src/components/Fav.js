import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { AppContext } from "../context/ProductContext";

const Cart = (product) => {
  const { addToFav, removeFromFav, favourite, addToCart, removeFromCart, cart } = useContext(AppContext);

  const handleRemoveFromFav = (product) => {
    removeFromFav(product);
  };

  const handleAddToCart = () => {
    addToCart(product);

  };
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };


  const [total, setTotal] = useState(0);


  return (
    <>
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {favourite.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image src={product.image} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{product.title}</span>
                  </Col>
                  <Col md={2}>₹{product.price}</Col>


                  <Col md={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromFav(product)}
                    >
                      <AiFillDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

        </div>
      </div>
    </>
  );
};

export default Cart;