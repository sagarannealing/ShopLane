import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

const Categories = ({ productsByCategory }) => {


  return (
    <div className="categories">
      <span className="title">Categories</span>
      <NavLink className="nav-links" onClick={() => productsByCategory("")}>All Products</NavLink>
      <NavLink className="nav-links" onClick={() => productsByCategory("men's clothing")}>
        Men's Clothing
      </NavLink>
      <NavLink  className="nav-links"onClick={() => productsByCategory("women's clothing")}>
        Women's Clothing
      </NavLink>
      <NavLink className="nav-links" onClick={() => productsByCategory("Electronics")}>
        Electronics
      </NavLink>
      <NavLink  className="nav-links" onClick={() => productsByCategory("jewelery")}>Jewelery</NavLink>
    </div>
  )
}

export default Categories