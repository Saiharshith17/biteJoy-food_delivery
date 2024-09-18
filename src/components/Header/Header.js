import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="header">
        <div className="header-contents">
            <h2> Treat Yourself to Your Favorite Cuisine</h2>
            <p> Discover an array of delectable dishes, prepared with premium ingredients to satisfy your cravings. Our diverse menu offers both classic favorites and unique creations. Enjoy a dining experience designed to delight your taste buds.</p>
            <a href='#explore-menu'>
            <button>View Menu</button>
            </a>
        </div>
    </div>
  )
}

export default Header