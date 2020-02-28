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
            <input {...props} className={`block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4 ${props['data-right-label'] && 'pl-8'}`} />
        </>
    )
}

export default memo(FieldNumber, (p, n) =>
    p.value === n.value ||
    p['data-right-label'] === n['data-right-label']
)