import React, { FC } from 'react'
import { Link } from "gatsby"

interface MyProps { }

const experiences = [{
	title: "Cloud Solution Architect for Azure",
	company: "Microsoft Deutschland GmbH",
	year: "2021 - 2023",
	text: [
		"Managed technical partnership with 20+ software companies to build and scale their B2B SaaS solutions",
		"Designed cloud architectures and product roadmaps with C-level and lead developers",
		"Implemented and optimized architectures with PoCs, hackathons, workshops with focus on Cloud Native technologies and Kubernetes; e.g. reduced global maximum latency of an appli-cation from 1.5 seconds to 300ms using a CDN"
	]
}, {
	title: "Backend Development Working Student",
	company: "Freeletics GmbH",
	year: "2019 - 2021",
	text: [
		"Developed backend services with Ruby on Rails, Docker and Kubernetes",
		"Created and monitored an endpoint to serve a paywall with content from an external CMS which handles 40.000 requests per day",
		"Developed endpoints for processing payments with Stripe and Paypal and EBANX with thousands of transactions per day",
	]
}, {
	title: "Co-Founder",
	company: "ReadNext",
	year: "2019 - 2020",
	text: [
		"Launched a content-based recommender-system for online news and blog platforms",
		"Deployed a NLP pipeline with Python and a dockerized React web app on AWS",
		"Implemented an online research experiment targeting user impact of recommender-systems for the TU Hamburg with 20.000 participants"
	]
}, {
	title: "Cloud Solution Architect for Azure",
	company: "Microsoft Deutschland GmbH",
	year: "2018",
	text: [
		"Got selected software engineer for Germany’s first eGovernment fellowship in cooperation with Germany’s Chief of Staff Prof. Helge Braun in Berlin",
		"Worked in an interdisciplinary SCRUM team in collaboration with ITZBund",
		"Designed an architecture for the German digital citizen",
		"Introduced user-centric approaches to authorities with user stories and prototypes"
	]
}
]

const Experience: FC<MyProps> = () =>
	<div className=''>
		{experiences.map((item, index) => {
			return (
				<div className='flex flex-col mb-5' key={index}>
					<div className='flex'>
						<h3 className='font-bold flex-1'>{item.title}</h3>
						<h3 className='font-bold'>{item.year}</h3>
					</div>
					<h3 className='font-bold'>{item.company}</h3>
					<ul className='list-disc list-inside'>
					{item.text.map((text, textIndex) => {
						return (
							<li className='' key={"company-" + index + "text-" + textIndex}> {text}</li>
						)
					})}
					</ul>
					<Link to='/'>Read more...(coming soon)</Link>
				</div>
			)
		})
		}
	</div >

export default Experience;