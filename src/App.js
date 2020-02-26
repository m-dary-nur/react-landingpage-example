import React from 'react';
import doodle from './assets/images/doodle.svg';

function App() {
	return (
		<div>				
			<div className="container mx-auto px-8 font-sans">
				<header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">					
					<h3 className="text-2xl font-bold uppercase text-blue-900">Logo</h3>
					<nav className="hidden md:flex text-lg">
						<a href="#home" className="bg-blue-200 hover:bg-blue-300 rounded-full text-blue-700 py-3 px-6">Home</a>
						<a href="#about" className="text-gray-800 hover:text-blue-300 py-3 px-6">About</a>
						<a href="#contact" className="text-gray-800 hover:text-blue-300 py-3 px-6">Contact</a>
						<a href="#faq" className="text-gray-800 hover:text-blue-300 py-3 px-6">FAQ</a>
					</nav>
					<button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
						<span className="w-5 h-px mb-1 bg-orange-500"></span>
						<span className="w-5 h-px mb-1 bg-orange-500"></span>
						<span className="w-5 h-px mb-1 bg-orange-500"></span>
					</button>
				</header>
				<main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">					
					<div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
						<h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">Example</h1>
						<h2 className="uppercase text-4xl text-blue-400 text-secondary tracking-widest mb-6">sub header</h2>
						<p className="text-gray-600 leading-relaxed mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit.</p>
						<a href="#learn-more" className="bg-blue-300 hover:bg-blue-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Learn more</a>
					</div>				
					<div className="flex justify-center mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-0">					
						<img src={doodle} alt='doodle' className="sm:w-full md:w-10/12" />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
