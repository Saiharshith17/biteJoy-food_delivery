import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../context/StoreContext';


function FoodItem({id,name,price,description,image}) {




    const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img className="food-item-image" src={image} alt=""/>
           {
            !cartItems[id]?<p className="add" onClick={()=>addToCart(id)} >Add</p>
             :<div className="food-item-counter">
              <p onClick={()=>removeFromCart(id)} > - </p>
              <p> {cartItems[id]}</p>
              <p onClick={()=>addToCart(id)} > + </p>
             </div>
           }
        </div>
        <div className="food-item-info">
        <div className={cartItems[id] ? "food-item-name-rating-active" : "food-item-name-rating"}>
                <p className="para">{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price"><FontAwesomeIcon icon={faIndianRupeeSign} className="custom-rupee-icon" /> {price} for one</p>
          
        </div>
    </div>
  )
}

export default FoodItem