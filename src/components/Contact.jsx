import React, { memo, useState } from 'react'


const Contact = () => {

    const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [feedback, setFeedback] = useState(null)

	const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value }) 
	
	const encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const close = () => setFeedback(null)

	const handleSubmit = e => {
		e.preventDefault()
		fetch('/.netlify/functions/sendmail', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
			'form-name': e.target.getAttribute('name'),
			...formData,
			}),
		})
		.then(() => {
			setFeedback("Your inquery has been received.")
			setFormData({
				name: '',
				email: '',
				message: '',
			})
		})
		.catch(error => alert(error))
	}

	return (
        <section>
			<div id='contact' className='overflow-x-hidden bg-gray-100'>
				<div className='contact-me bg-background-secondary pt-16'>
					<div className='container-inner mx-auto text-xl pb-4 relative'>
						<h3 className='flex flex-col items-center text-4xl text-secondary font-bold text-center'>Let's work together <span className='bg-primary h-1 w-20 block mt-4'></span></h3>
						<p className='mb-8 mt-5 text-center'>We would love to hear about your project and see how we can help. Please fill out the form below and well get back to you right away.</p>

						{feedback && <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5' role='alert'>
							<strong className='font-bold'>Thank you! </strong>
							<span className='block sm:inline'>{feedback}</span>
							<span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
								<svg onClick={close} className='fill-current h-6 w-6 text-green-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><title>Close</title><path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/></svg>
							</span>
						</div>}
						<div className='text-lg sm:text-lg mb-16'>
							<form onSubmit={handleSubmit} name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>								
								<div className='flex flex-wrap mb-6 -mx-4'>
									<div className='w-full md:w-1/2 mb-6 md:mb-0 px-4'>
										<label className='block mb-2 text-copy-primary font-bold' htmlFor='name'>Name</label>
										<input type='text' name='name' id='name' value={formData.name} onChange={handleChange} placeholder='John Doe' className='block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4' required />
									</div>

									<div className='w-full px-4 md:w-1/2'>
										<label className='block text-copy-primary mb-2 font-bold' htmlFor='email'>Email Address</label>
										<input type='email' name='email'id='email' value={formData.email} onChange={handleChange} placeholder='email@example.com'  className='block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4' required />
									</div>
								</div>

								<div className='w-full mb-12'>
									<label className='block text-copy-primary mb-2 font-bold' htmlFor='message'>Message</label>
									<textarea id='message' rows='5' name='message' value={formData.message} onChange={handleChange} className='block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4' placeholder='Enter your message here.' required></textarea>
								</div>

								<div className='flex w-full'>
									<button type='submit' className='w-full block bg-primary hover:bg-green-800 text-white text-xl font-semibold tracking-wide shadow rounded uppercase cursor-pointer px-6 py-3'>Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
        </section>
	)
}
		
export default memo(Contact)