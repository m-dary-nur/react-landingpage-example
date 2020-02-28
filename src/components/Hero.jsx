import React, { memo } from 'react'

import WaveSvg from '../assets/images/wave.svg'
import SavingsSvg from '../assets/images/savings.svg'

const Hero = ({ scrollTo }) => {

	return (
		<section>
			<div className='relative overflow-hidden px-6 pb-6'>
				<img src={WaveSvg} alt='wave' className='absolute top-0 left-2/5' />
				<div className='container mx-auto relative'>
					<div className='flex flex-col md:flex-row items-center pt-32 md:pt-32 pb-16 md:pb-0'>

						<div className='md:w-1/2 mb-4 sm:mb-16 md:mb-0'>
							<h1 className='text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-6 md:mb-5'>The best savings account for freelancers & contractors</h1>
							<p className='text-lg text-gray-800 mb-4 mb-10'>When you save in a retirement plan, you're putting the power of tax-deferred compounding to work for you. Your money can grow faster because earnings that could have been taxed get reinvested and earn even more.</p>

							<a href='/' onClick={e => scrollTo('contact', e)}  className='bg-primary px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl text-white font-bold rounded hover:bg-primary-400 uppercase hover:no-underline'>Start Saving</a>
						</div>


						<div className='mt-16 sm:mt-0 flex-1 lg:flex justify-end'>
							<div>
								<img src={SavingsSvg} alt='savings' />
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}

export default memo(Hero)