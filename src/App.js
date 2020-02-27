import React, { useState, useEffect } from 'react'
import doodle from './assets/images/doodle.svg'
import FieldNumber from './components/FieldNumber'
import Chart from './components/Chart'
import Select from './components/Select2'
import Table from './components/Table'

const currencyList = [
	{value: '£', label: 'GBP' }, 
	{value: '$', label: 'USD' },
	{value: '€', label: 'EUR' }, 
	{value: 'Fr', label: 'CHF' }
]

function App() {	
	const [input, setInput] = useState({
		currency: '£',
		period: '',
		growth: '',
		contribution: ''
	})
	const handleChange = e => {	
		const { id, value } = e.target
		setInput(oldState => ({ ...oldState, [id]: value }))
	}
	
	useEffect(() => {
		document.title = 'Compound Interest calculator'
	}, [])

	return (
		<div className='bg-blue-100'>			
			<div className='container mx-auto px-8 font-sans'>
				<header className='flex flex-col sm:flex-row items-center justify-between py-6 relative'>
					<div className='flex flex-row items-center justify-between'>
						<img src={doodle} alt='doodle' className='w-16 pr-4' />
						<h3 className='text-2xl font-bold text-blue-900'>Compound Interest Calculator</h3>					
					</div>
					<nav className='hidden md:flex text-lg'>
						<a href='#home' className='bg-blue-200 hover:bg-blue-300 rounded-full text-blue-700 py-3 px-6'>Home</a>
						<a href='#about' className='text-gray-800 hover:text-blue-300 py-3 px-6'>About</a>
						<a href='#contact' className='text-gray-800 hover:text-blue-300 py-3 px-6'>Contact</a>
						<a href='#faq' className='text-gray-800 hover:text-blue-300 py-3 px-6'>FAQ</a>
					</nav>
					<button className='flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5'>
						<span className='w-5 h-px mb-1 bg-orange-500'></span>
						<span className='w-5 h-px mb-1 bg-orange-500'></span>
						<span className='w-5 h-px mb-1 bg-orange-500'></span>
					</button>
				</header>
				<div className='flex sm:flex-row jusitfy-between items-top py-12'>
					<div className='sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left'>
						<h2 className='text-2xl text-blue-400 font-bold tracking-wide mb-6'>Start Calculation</h2>
						<form className='w-3/4'>
							<div className='pb-4'>
								<label htmlFor='currency' className='text-sm block font-bold pb-2'>Currency</label>
								<Select id='currency' value={input.currency} onChange={handleChange} items={currencyList} itemId='value' itemLabel={o => `${o.label} (${o.value})`} />
							</div>
							<div className='pb-4'>
								<label htmlFor='period' className='text-sm block font-bold pb-2'>Investment Period (Years)</label>
								<FieldNumber type='number' id='period' value={input.period} onChange={handleChange} max={100} maxLength={3} />
							</div>
							<div className='pb-4'>
								<label htmlFor='growth' className='text-sm block font-bold pb-2'>Annual Growth Rate (%)</label>
								<FieldNumber type='number' id='growth' value={input.growth} onChange={handleChange} />
							</div>
							<div className='pb-4'>
								<label htmlFor='contribution' className='text-sm block font-bold pb-2'>Monthly Contribution ({input.currency})</label>
								<FieldNumber type='number' id='contribution' value={input.contribution} onChange={handleChange} data-right-label={input.currency} />
							</div>
						</form>
					</div>
					<div className='flex justify-center mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-0'>						
						<div className='bg-white shadow rounded'>
							<Chart {...input} />
						</div>
					</div>
				</div>
				<div className='flex sm:flex-row jusitfy-between items-top py-12'>					
					<div className='sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left'>
						<Table {...input} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
