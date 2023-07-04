import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import GreaseFilter from "./GreaseFilter"

import hogs from "../porkers_data";



//console.log(hogs)

function App() {

	const [hogArray, setHogArray] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [button, setButton] = useState("Show Greased Pigs")


	function doSomethingFunction(buttonText){
		console.log("clicked")
		setIsGreased(!isGreased)
		console.log(isGreased)
		{(isGreased) ? setHogArray(hogs) : setHogArray(hogs.filter((item)=> item.greased == true)) }

		{(isGreased) ? setButton("Show Greased Pigs") : setButton("Show All Pigs") }
	}

	
	return (
		<div className="App">
			<Nav />
			<HogList hogData={hogArray} />
			<GreaseFilter greaseButton = {doSomethingFunction} buttonText = {button} />
		</div>
	);
}

export default App;
