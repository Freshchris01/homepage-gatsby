import React, { FC } from 'react'
import { Link } from "gatsby"

interface MyProps { }

const experiences = [{
	title: "Cloud Solution Architect for Azure",
	company: "Microsoft Deutschland GmbH",
	year: "2021-2023",
	text: [
		"Managed technical partnership with 20+ software companies to build and scale their B2B SaaS solutions",
		"Designed cloud architectures and product roadmaps with C-level and lead developers",
		"Implemented and optimized architectures with PoCs, hackathons, workshops with focus on Cloud Native technologies and Kubernetes; e.g. reduced global maximum latency of an appli-cation from 1.5 seconds to 300ms using a CDN"
	]
}, {
	title: "Games Engineering (B.Sc)",
	university: "Technical University of Munich (TUM)",
	year: "2014 - 2019",
	description: "Computer Science foundations, projects with game development technologies",
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
					<h3 className='font-bold'>{item.university}</h3>
					<p className=''>{item.description}</p>
					<Link to='/'>Read more...(coming soon)</Link>
				</div>
			)
		})
		}
	</div>

export default Experience;