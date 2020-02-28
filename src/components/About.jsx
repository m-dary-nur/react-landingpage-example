import React, { memo } from 'react'

import AboutUsSvg from '../assets/images/about-us.svg'

const About = () => {

    return (
        <div id='about' className='bg-blue-100 mt-32 py-12'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 md:pr-8 lg:pr-16'>
                        <img src={AboutUsSvg} alt='about-us' className='-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0' />
                    </div>
                    <div className='md:w-1/2'>
                        <h3 className='flex flex-col text-4xl text-secondary font-bold mb-6'>About us <span className='bg-primary h-1 w-20 block mt-4'></span></h3>
                        <p className='text-lg text-secondary-700 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                        <p className='text-lg text-secondary-700'>Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(About)