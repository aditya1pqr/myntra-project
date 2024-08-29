import React from 'react'
import HomeItems from '../componenets/HomeItems'
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((store) => store.items);
  console.log(items)


  return (
    <main>
        <div className="items-container">
          {items.map((item) =>(  <HomeItems key={item.id} item={item}/>))}
        
        </div>
      </main>
  )
}

export default Home
