import React, { useEffect } from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Compound from './components/Compound'

// const currencies = [
// 	{ value: '£', label: 'GBP' },
// 	{ value: '$', label: 'USD' },
// 	{ value: '€', label: 'EUR' },
// 	{ value: 'Fr', label: 'CHF' }
// ]

// const rates = [...Array(8).keys()].map(x => ({ value: (x + 1), label: (x + 1) + '%' }))

function Root() {
	// const [input, setInput] = useState({
	// 	currency: '£',
	// 	period: 15,
	// 	growth: 8,
	// 	contribution: 500
	// })
	// const handleChange = e => {
	// 	const { id, value } = e.target
	// 	setInput(oldState => ({ ...oldState, [id]: value }))
	// }

	const scrollTo = (id, e) => {
		e.preventDefault()
		document.getElementById(id).scrollIntoView({behavior: 'smooth'})
	}

	useEffect(() => {
		document.title = 'Home - React CRA Portofolio Starter'
	}, [])

	return (
		<div>
			<Nav scrollTo={scrollTo} />
			<Hero scrollTo={scrollTo} />
			<About />
			<Process />
			<Services />
			<Compound />
			<Contact />
			<Footer />
		</div>	
	)
}
			
export default Root
