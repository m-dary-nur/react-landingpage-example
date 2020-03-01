import React, { memo, useState } from 'react'
import Select from './Select'
import Field from './Field'
import Chart from './Chart'
import Table from './Table'
import rawCountries from '../helpers/rawCountries'

const rates = [...Array(8).keys()].map(x => ({ value: (x + 1), label: (x + 1) + '%' }))
const currencies = [
	{ value: '£', label: 'GBP' },
	{ value: '$', label: 'USD' },
	{ value: '€', label: 'EUR' },
	{ value: 'Fr', label: 'CHF' }
]

const leftLabelStyle = {
    position: 'absolute',
    paddingLeft: 12,
    paddingTop: 17,
}

const Flag = ({ flag }) => <div className={`flag ${flag}`}></div>

const Compound = () => {
	
	const [formData, setFormData] = useState({
		currency: '£',
		period: 15,
		growth: 8,
		contribution: 500,
		phonecode: '62',
		phonenumber: ''
	})

	const handleNumber = e => {
		setFormData({ ...formData, [e.target.name]: Number(e.target.value) })
	}

	const handlePhone = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value.replace(/[^0-9]/g, '') })
	}

	const handleDropdown = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	} 

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<section>
			<div id='compound' className='overflow-x-hidden bg-white'>
				<div className='contact-me bg-background-secondary pt-16'>
					<div className='container mx-auto px-6 py-32 relative'>
						<h3 className='flex flex-col items-center text-4xl text-secondary font-bold text-center pb-12'>Let's calculate <span className='bg-primary h-1 w-20 block mt-4'></span></h3>

						<div className='mb-24 md:mb-16 xl:mb-8 sm:w-full w-full'>
							<form onSubmit={handleSubmit} name='calculation' method='post' className='w-full'>													
								<div className='flex flex-wrap mb-6'>
									<div className='w-full md:w-1/2 mb-6 px-4'>
										<label className='block mb-2 text-copy-primary font-bold' htmlFor='currency'>Currency</label>
										<Select name='currency' id='currency' value={formData.currency} onChange={handleDropdown} items={currencies} itemId='value' itemLabel={o => `${o.label} (${o.value})`} />
									</div>

									<div className='w-full md:w-1/2 mb-6 px-4'>
										<label className='block text-copy-primary mb-2 font-bold' htmlFor='period'>Investment Period (Years)</label>
										<Field type='number' name='period' id='period' value={formData.period} onChange={handleNumber} onFocus={e => e.target.select()} />
									</div>
								</div>
								<div className='flex flex-wrap mb-6'>
									<div className='w-full md:w-1/2 mb-6 px-4'>
										<label className='block mb-2 text-copy-primary font-bold' htmlFor='growth'>Annual Growth Rate</label>
										<Select name='growth' id='growth' value={formData.growth} onChange={handleDropdown} items={rates} itemId='value' itemLabel='label' />
									</div>

									<div className='w-full md:w-1/2 mb-6 px-4'>
										<label className='block text-copy-primary mb-2 font-bold' htmlFor='contribution'>Monthly Contribution ({formData.currency})</label>
										<span className='text-gray-500' style={leftLabelStyle}>{formData.currency}</span>
										<Field type='number' name='contribution' id='contribution' value={formData.contribution} onChange={handleNumber} onFocus={e => e.target.select()} style={{ paddingLeft: '2rem' }} />
									</div>
								</div>
								<div className='flex flex-wrap mb-6'>
									<div className='w-full md:w-2/6 mb-6 px-4'>
										<label className='block text-copy-primary mb-2 font-bold' htmlFor='phonecode'>Phone Code</label>
										<Select searchable name='phonecode' id='phonecode' value={formData.phonecode} onChange={handleDropdown} items={rawCountries} itemId={3} itemLabel={o => <><Flag flag={o[2]} /> &nbsp; +{o[3]}</>} itemSearch={o => `${o[3]} ${o[0]}`} itemRender={(o, x) => <><Flag flag={o[2]} /> &nbsp; {o[0]} &nbsp; <span className={x ? 'text-white font-bold' : 'text-gray-500'}>+{o[3]}</span></>} />
									</div>
									<div className='w-full md:w-4/6 mb-6 px-4'>
										<label className='block text-copy-primary mb-2 font-bold' htmlFor='phonecode'>Phone Number</label>
										<Field type='text' name='phonenumber' id='phonenumber' value={formData.phonenumber} onChange={handlePhone} />
									</div>								
								</div>								
							</form>
						</div>

						<div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between'>							
							<div className='mb-24 mx-4 md:mb-16 xl:mb-8 sm:w-full md:w-2/3'>
								<div className='bg-white shadow rounded w-full'>
									<Chart {...formData} />
								</div>
							</div>

							<div className='mb-24 mx-4 md:mb-16 xl:mb-8 sm:w-full md:w-1/3'>
								<div className='bg-white shadow rounded w-full'>
									<Table {...formData} />
								</div>
							</div>
						</div>					
					</div>
				</div>
			</div>
        </section>
	)
}
		
export default memo(Compound)