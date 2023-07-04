import React from "react"
import HogItem from "./HogItem"

function Hoglist({hogData}) {

   console.log(hogData);

   const hoglist = hogData.map((item) => (
      <HogItem
      key={item.name} 
      name= {item.name}
      image= {item.image}
      specialty = {item.specialty}
      greased = {(item.greased) ? "greased" : "not greased"}
      weight = {item.weight}  
      medal = {item["highest medal achieved"]}
      />
   ))



   return(
      <div className="ui grid container">
         {hoglist}
      </div>
   )
}

export default Hoglist