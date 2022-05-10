import React from "react";
import Header from './Header';
import Hero from './Hero';
import NFTS from "./NFTS";


const App = () => {

	return (
		<div className="min-h-screen text-white selection:bg-indigo-500 selection:text-white">
    <Header/>
    <Hero/>
    <NFTS/>
	</div>
	);
};

export default App;
