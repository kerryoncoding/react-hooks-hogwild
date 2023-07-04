import React from "react"


function GreaseFilter({greaseButton, buttonText}) {

   return(
      <div>
         <button onClick={greaseButton}>{buttonText}</button>
      </div>
   )
}

export default GreaseFilter