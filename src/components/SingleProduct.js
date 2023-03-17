import React, { useContext } from "react";
import { Button, Card, Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { AppContext } from "../context/ProductContext";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
const SingleProduct = ({ product }) => {
  const { addToCart, removeFromCart, cart,addToFav,favourite,removeFromFav } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(product);
    
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const handleAddToFav=()=>{
    addToFav(product);
  }
  const handleRemoveFromFav = () => {
    removeFromFav(product);
  };

  const Slicer = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };
  const title = product.title;
  console.log(cart)
  return (
    <div className="products">
      <Card>
      {favourite.some((item) => item.id === product.id) ? (
        <AiFillHeart color="red" fontSize="20px" onClick={handleRemoveFromFav}/>):(
        <AiOutlineHeart color="red" fontSize="20px" onClick={handleAddToFav} />)
        }
        <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
          <Image
            className="prod-image"
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <Card.Body>
          <Card.Title
            style={{ fontSize: "10px" }}
            title={title.length >= 50 ? title : null}
          >
            {Slicer(title, 28)}
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹{product.price}</span>
            <div>
              <StarRatings
                rating={product.rating.rate}
                starDimension="15px"
                starSpacing="1px"
              />
            </div>
          </Card.Subtitle>
          {cart.some((item) => item.id === product.id) ? (
            <Button
              variant="danger"
              style={{ fontSize: "12px" }}
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button style={{ fontSize: "12px" }} onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
