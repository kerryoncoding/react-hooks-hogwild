import React, {useState} from "react"



function HogItem({name, image, specialty, weight, greased, medal}){

   const [showInfo, setShowInfo ] = useState("false")

   function displayInfo(){
      setShowInfo(!showInfo)
   }


   return(
      <div className= "pigTile" onClick={displayInfo}>
         <h3>{name}</h3>
         <img src={image} className="minPigTile"></img> 
         {(showInfo) ? "" : <p>specialty: {specialty}</p>}
         {(showInfo) ? "" : <p>weight: {weight} lbs</p>}
         {(showInfo) ? "" : <p>{greased}</p>}
         {(showInfo) ? "" : <p>medal: {medal}</p>}
      </div>

   )
   
}


export default HogItem