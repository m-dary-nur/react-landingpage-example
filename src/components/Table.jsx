import React, { memo, useMemo, useState, useEffect } from 'react'
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
		<div className='px-2 py-4'>
			<h3 className='text-xl font-bold text-center'>Breakdown</h3>
			{data.length > 0 && <h3 className='text-md text-secondary text-center mt-2 text-gray-300'>in {period} years, you will have {`${currency} ${separator(data[data.length - 1].value.toFixed(2))}`}</h3>}
			<div className='overflow-x-auto h-16' style={{ height: '21.8rem' }}>
				<table className='text-left w-full border-collapse'>
					<thead>
						<tr>
							<th className='py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light'>End Of Year</th>
							<th className='py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light'>Value ({currency})</th>
						</tr>
					</thead>
					<tbody>
						{data.map((o, i) => (
							<tr key={i} className='hover:bg-grey-lighter'>
								<td className='py-4 px-6 border-b border-grey-light'>{o.label}</td>
								<td className='py-4 px-6 border-b border-grey-light'>{`${currency} ${separator(o.value.toFixed(2))}`}</td>
							</tr>
						))}										
					</tbody>
				</table>
			</div>
		</div>			
	)
}

export default memo(Table)
