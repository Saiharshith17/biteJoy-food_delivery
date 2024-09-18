import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({category,setCategory}) {
  return (
    <div className="explore-menu" id="explore-menu">
       <h1>Explore Our Menu</h1> 
       <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our misiion is to satisfy your cravings and elevate your dining experience</p>
          <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                      <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                      <p>{item.menu_name}</p>
                  </div>
                    )
                })
            }
          </div>
    </div>
  )
}

export default ExploreMenu