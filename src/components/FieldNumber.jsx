import React, { memo } from 'react'

const dataRightLabelStyle = {
    position: 'absolute',
    paddingLeft: 10,
    paddingTop: 9,
}

const FieldNumber = props => {    
    return (
        <>
            {props['data-right-label'] && <span className='text-gray-500' style={dataRightLabelStyle}>{props['data-right-label']}</span>}
            <input {...props} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ${props['data-right-label'] && 'pl-8'}`} />
        </>
    )
}

export default memo(FieldNumber)