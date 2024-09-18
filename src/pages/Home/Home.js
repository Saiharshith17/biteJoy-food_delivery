import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'

function Home() {
  
  const [category,setCategory] = useState("All");
  return (
    <>
    <Header/>
    <ExploreMenu setCategory={setCategory} category={category}/>
    <FoodDisplay category={category}/>
    
  </>
  )
}

export default Home