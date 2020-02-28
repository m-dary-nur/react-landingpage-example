import React, { memo, useMemo, useState, useEffect } from 'react'
import { LineChart, Label, XAxis, YAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import separator from '../helpers/separator'


function renderTooltip(currency, { payload = [] }) {
	if (!payload || payload.length === 0) { return false }
	return (
		<div className='bg-white shadow rounded p-2 font-bold'>
			<span className='text-blue-500'>{currency}</span> {separator(payload[0].value.toFixed(2))}
		</div>
	)
}

const Chart = props => {
	console.log(props)
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
			<ResponsiveContainer height={400} width='100%'>
				<LineChart					
					data={data}
					margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='label'>
						<Label value='Years' offset={-3} position='insideBottom' className='font-medium italic' />
					</XAxis>
					<YAxis />
					<Tooltip content={x => renderTooltip(currency, x)} />
					<Line type='monotone' dataKey='value' />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default memo(Chart, (p, n) => 
	p.period === n.period ||
	p.growth === n.growth ||
	p.contribution === n.contribution ||
	p.currency === n.currency
)