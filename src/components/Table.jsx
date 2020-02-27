import React, { useMemo, useState, useEffect } from 'react'
import { HTMLTable } from '@blueprintjs/core'
import separator from '../helpers/separator'

const Table = props => {

    const [variable, setVariable] = useState({ period: 0, growth: 0, contribution: 0 })
	const { period, growth, contribution, currency } = variable

	useEffect(() => {
		const handler = setTimeout(() => setVariable(props), 700)
		return (() => {
			clearTimeout(handler)
		})
	}, [props, variable, setVariable])
	
	const data = useMemo(
		() => {
			const result = []
			for (let i = 1; i <= period; i++) {
				let lastFutureValue = contribution * 12
				if (result.length > 0) {
					lastFutureValue = result[result.length - 1].value + contribution * 12
				}
				result.push({
					label: `${i}`,
					value: lastFutureValue * Math.pow(1 + growth / 100, 1)
				})
			}

			return result
		},
		[period, growth, contribution]
    )
    
    return (
        <div className='bg-white shadow p-4 w-full'>
            <h3 className='text-xl font-bold text-blue-900'>Breakdown</h3>
	        {data.length > 0 && <h3 className='text-md font-bold text-secondary text-blue-900'>in {period} years, you will have {`${currency} ${separator(data[data.length - 1].value.toFixed(2))}`}</h3>}
            <HTMLTable striped bordered className='w-full'>
                <thead>
                    <tr>
                    <th>End of year</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((o, i) => (
                        <tr key={i}>
                            <td>{o.label}</td>
                            <td>{`${currency} ${separator(o.value.toFixed(2))}`}</td>
                        </tr>
                    ))}
                </tbody>
            </HTMLTable>

        </div>
    )
}

export default Table
