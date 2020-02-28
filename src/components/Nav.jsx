import React, { memo, useState } from 'react'

import AtomSvg from '../assets/images/atom.svg'
import BarSvg from '../assets/images/bar.svg'

const Nav = ({ scrollTo }) => {	

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<header className={`absolute top-0 left-0 right-0 z-10 ${isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
	  		<nav className='container mx-auto flex flex-wrap justify-between items-center py-8'>
				<div>
					<a href='/' className='hover:no-underline'>
						<div className='flex items-center'>
							<img src={AtomSvg} alt='logo' className='w-10' />
							<h1 className='text-black font-bold text-2xl pl-2'>Atom</h1>
						</div>
					</a>
				</div>			
				<div className='block lg:hidden'>
					<button onClick={toggle} className='flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600'>					
						<img src={BarSvg} alt='bar' className='w-3 w-3' />
					</button>
				</div>
				<ul className={`${isOpen ? 'block' : 'hidden'} uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0`}>
					<li className='mr-8 mb-6 lg:mb-0'>
						<a href='/' onClick={e => scrollTo('about', e)} className='text-gray-700 hover:text-gray-600 hover:no-underline'>About</a>
					</li>
					<li className='mr-8 mb-6 lg:mb-0'>
						<a href='/' onClick={e => scrollTo('process', e)} className='text-gray-700 hover:text-gray-600 hover:no-underline'>Why</a>
					</li>
					<li className='mr-8 mb-6 lg:mb-0'>
						<a href='/' onClick={e => scrollTo('services', e)} className='text-gray-700 hover:text-gray-600 hover:no-underline'>Services</a>
					</li>
					<li className='mr-8 mb-6 lg:mb-0'>
						<a href='/' onClick={e => scrollTo('contact', e)} className='px-6 py-3 font-bold uppercase bg-primary hover:bg-primary-400 text-white rounded hover:no-underline '>Start Saving</a>
					</li>		 
				</ul>
	  		</nav>
		</header>
	)
}

export default memo(Nav)
