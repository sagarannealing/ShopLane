import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { AppContext } from "../context/ProductContext";

const Cart = () => {
  const { removeFromCart, cart, updateCartQty } = useContext(AppContext);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleQtyIncrease = (product) => {
    const newQty = product.qty + 1;
    updateCartQty(product.id, newQty);
  };

  const handleQtyDecrease = (product) => {
    const newQty = product.qty - 1;
    updateCartQty(product.id, newQty);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {cart.map((product) => (
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
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQtyDecrease(product)}
                      disabled={product.qty <= 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{product.qty}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQtyIncrease(product)}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      <AiFillDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="categories summary">
          <span className="title" style={{ fontSize: "1.5rem" }}>
            Subtotal ({cart.length}) items
          </span>
          <span>Total : ₹ {total.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
