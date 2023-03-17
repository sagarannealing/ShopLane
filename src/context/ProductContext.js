import axios from "axios";
import { createContext,useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer';

const AppContext=createContext();
const API = "https://fakestoreapi.com/products"


const IntialState={
       products:[],
       cart:[],
       favourite:[]            
}

const AppProvider=({children})=>{
   
    const[state,dispatch]=useReducer(reducer,IntialState);
    
    const getProducts=async(url)=>{
      const response=await axios.get(url);
      console.log(response);
        const products=await response.data;
        dispatch({type:"MY_PRODUCTS",payload:products});
                   
    };
    const addToCart=(product)=>{
        dispatch({type:"ADD_TO_CART",payload:product});
        
    }
    const removeFromCart=(product)=>{
        dispatch({type:"REMOVE_FROM_CART",payload:product}); 
    }
    const updateCartQty=(id,qty)=>{
        dispatch({type:"UPDATE_CART_QTY",payload:{id,qty}});
    }
    const addToFav=(product)=>{
        dispatch({type:"ADD_TO_FAV",payload:product})
    }
    const removeFromFav=(product)=>{
        dispatch({type:"REMOVE_FROM_FAV",payload:product})
    }
    useEffect(() => {
        getProducts(API);
    }, [])
    
    return(
        <AppContext.Provider value={{...state,addToCart,removeFromCart,updateCartQty,addToFav,removeFromFav}}>{children}</AppContext.Provider>
    )
};
export {AppProvider,AppContext};