import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import GreaseFilter from "./GreaseFilter"
import NameSort from "./NameSort"
import WeightSort from "./WeightSort"

import hogs from "../porkers_data";



//console.log(hogs)

function App() {

	const [hogArray, setHogArray] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [button, setButton] = useState("Show Greased Pigs")


	function showGreasedPigs(){
		// console.log("clicked")
		setIsGreased(!isGreased)
		// console.log(isGreased)
		{(isGreased) ? setHogArray(hogs) : setHogArray(hogs.filter((item)=> item.greased == true)) }

		{(isGreased) ? setButton("Show Greased Pigs") : setButton("Show All Pigs") }
	}

	function sortName() {
		console.log("sortNames")
		setHogArray(hogArray.map(x => x).sort((a, b) => {
			let fa = a.name, 
			fb = b.name;

			if (fa < fb) {return -1}
			if (fa > fb) {return 1}
			return 0
		}));
		console.log(hogArray)
	}

	function sortWeight() {
		console.log("sortWeight")
		setHogArray(hogArray.map(x => x).sort((a, b) => b.weight- a.weight))
		console.log(hogArray)
	}


	
	return (
		<div className="App">
			<Nav />
			<HogList hogData={hogArray} />
			<div>
				<GreaseFilter greaseButton = {showGreasedPigs} buttonText = {button} />
				<NameSort handleNameSort={sortName}/>
				<WeightSort handleWeightSort={sortWeight}/>
			</div>
			
		</div>
	);
}

export default App;
