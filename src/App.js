import React from "react";
import FAQ from "./FAQ";
import Header from './Header';
import Hero from './Hero';
import NFTS from "./NFTS";
import Roadmap from "./Roadmap";
import Footer from './Footer';



const App = () => {

	return (
		<div className="min-h-screen text-white selection:bg-indigo-500 selection:text-white">
    <Header/>
    <Hero/>
    <NFTS/>
    <Roadmap/>
    <FAQ/>
    <Footer/>
	</div>
	);
};

export default App;
