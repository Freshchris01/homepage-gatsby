import React, { FC } from 'react'
import { Link } from "gatsby"
import Heading from './components/Heading'

interface MyProps { }

const projects = [{
	title: "Distributed Reinforcement Learning for Robotics in the Cloud, Master Thesis",
	year: "2022",
	text: [
		"Created a software framework to parallelize robotic simulations in the cloud for reinforcement learning",
		"Dockerized robotic simulations created with Unity3D to deploy them to any Kubernetes cluster and scale to thousands of parallel simulations",
		"Technology: Python, Node.js, Kubernetes, Unity3D, C#"
	]
}, {
	title: "Information Retrieval from Source Code, Bachelor Thesis, CQSE GmbH",
	year: "2019",
	text: [
		"Solved the problem of finding experts covering topics in a codebase as well as knowledge monopolies problems",
		"Implemented a natural language processing (NLP) pipeline to analyze source code and combined the results with software development (git) data",
		"Technology: Python, Node.js, React, Java"
	]
}
]

const Projects: FC<MyProps> = () =>
	<div className='' id='projects'>
		<Heading title='Projects' />
		{projects.map((item, index) => {
			return (
				<div className='flex flex-col mb-5' key={index}>
					<div className='flex'>
						<h3 className='font-bold flex-1'>{item.title}</h3>
						<h3 className='font-bold'>{item.year}</h3>
					</div>
					<ul className='list-disc list-outside pl-4'>
					{item.text.map((text, textIndex) => {
						return (
							<li className='' key={"company-" + index + "text-" + textIndex}> {text}</li>
						)
					})}
					</ul>
				</div>
			)
		})
		}
	</div >

export default Projects;