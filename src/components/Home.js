import React, { useContext, useState } from "react";
import { AppContext } from "../context/ProductContext";

import SingleProduct from "./SingleProduct";
import Categories from "./Categories";
import "./styles.css";

function Home() {
  const { products }= useContext(AppContext);
   const [filteredProducts, setFilteredProducts] = useState(products);

  const productsByCategory = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    }
    else {
      const filtered = products.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()));
      setFilteredProducts(filtered)
    }
  };
  return (
    <>
      <div className="home">

        <Categories productsByCategory={productsByCategory} />


        <div className="productContainer">
          {filteredProducts.map((product) => {
            return (
              <>
                <SingleProduct
                  key={product.id}
                  product={product}

                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
