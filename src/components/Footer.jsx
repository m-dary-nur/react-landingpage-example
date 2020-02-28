import React, { memo } from 'react'


const Footer = () => {

    return (
        <footer className='bg-blue-100'>
            <div className='container mx-auto px-6 py-12 text-secondary-500 text-center border-t border-gray-300'>
                <p className='text-base'>Copyright ©2020 Shopify Builders. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default memo(Footer)
