import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"

import hogs from "../porkers_data";

//console.log(hogs)

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList hogData={hogs} />
		</div>
	);
}

export default App;
