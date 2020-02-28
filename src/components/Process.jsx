import React, { memo } from 'react'

// import Circle2Svg from '../assets/images/circle2.svg'

const Process = () => {
	return (
		<div id='process' className='relative'>
			{/* <img src={Circle2Svg} alt='circle2' className='hidden sm:block absolute top-0 left-0 -mx-32' /> */}
			<div className='container mx-auto px-6 pt-6 pb-12 relative'>
				<h3 className='flex flex-col items-center text-4xl text-secondary font-bold mb-12'>Our process <span className='bg-primary h-1 w-20 block mt-4'></span></h3>
				<div className='flex flex-col md:flex-row xl:px-2'>
					<div className='flex flex-col items-center md:px-6 lg:px-6'>
						<span className='text-6xl text-primary'>1</span>
						<h4 className='font-semibold text-2xl text-secondary mb-2'>Analysis</h4>
						<p className='text-center text-secondary-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
					</div>
					<div className='flex flex-col items-center md:px-6 lg:px-6'>
						<span className='text-6xl text-primary'>2</span>
						<h4 className='font-semibold text-2xl text-secondary mb-2'>Execution</h4>
						<p className='text-center text-secondary-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
					</div>
					<div className='flex flex-col items-center md:px-6 lg:px-6'>
						<span className='text-6xl text-primary'>3</span>
						<h4 className='font-semibold text-2xl text-secondary mb-2'>Success</h4>
						<p className='text-center text-secondary-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
					</div>
				</div>
			</div>
		</div>
	)
}
		
export default memo(Process)