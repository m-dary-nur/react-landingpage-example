import React, { memo } from 'react'


const Field = props => {
    return (
        <input {...props} className='block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4' />
    )
}

export default memo(Field, (p, n) =>
    p.value === n.value
)