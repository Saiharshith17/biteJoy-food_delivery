import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
function FoodDisplay({category}) {
    const {food_list}=useContext(StoreContext);
    
  return (
    <div className="food-display" id="food-display">
     <h2>Top dishes near you</h2>
     <div className="food-display-list">
        {  
            food_list.map((item,index)=>{
              if(category==="All"||category===item.food_category){
                return <FoodItem key={index} id={item.food_id} name={item.food_name} description={item.food_desc} price={item.food_price} image={item.food_image}/>
              }
                   
                
            })}
     </div>
    </div>
  )
}

export default FoodDisplay