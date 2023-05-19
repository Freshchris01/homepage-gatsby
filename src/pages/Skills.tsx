const imageUrl = "https://placehold.co/100x100"
import React, { FC } from 'react'
import { Link } from "gatsby"
import Heading from './components/Heading'
import Skill from './components/Skill'

interface MyProps { }

const skills = [{
	category: "Cloud",
	items: [
		{
			title: "Azure",
			scale: 3
		},
		{
			title: "Terraform",
			scale: 2
		},
		{
			title: "GitHub",
			scale: 3
		}
	]
},
{
	category: "Programming Languages",
	items: [
		{
			title: "Python",
			scale: 2
		},
		{
			title: "JavaScript",
			scale: 2
		},
		{
			title: "TypeScript",
			scale: 2
		},
		{
			title: "C#",
			scale: 1
		}
	]
},
{
	category: "Virtualization",
	items: [
		{
			title: "Docker",
			scale: 3
		},
		{
			title: "Kubernetes",
			scale: 2
		}
	]
}
]

const Skills: FC<MyProps> = () =>
	<div className=''>
		<Heading title='Skills' />
		{skills.map((category, index) => {
			return (
				<div className='flex flex-col mb-5' key={"skill-category-" + index}>
					<h3 className='font-bold flex-1'>{category.category}</h3>
					<div className='flex'>
					{category.items.map((item, index) => {
						return (
							<Skill title={item.title} scale={item.scale} />
						)
					})}
					</div>
				</div>
			)
		})
		}
	</div>

export default Skills;