const imageUrl= "https://placehold.co/100x100"
import React, {FC } from 'react'
import { Link } from "gatsby"

interface MyProps{}

const educatuion = [{
  title: "Computer Science (M.Sc)",
	university: "Technical University of Munich (TUM)",
  year: "2019 - 2022",
  description: "Focus: Software engineering, data science and High-Performance Computing (HPC)", 
},{
  title: "Games Engineering (B.Sc)",
	university: "Technical University of Munich (TUM)",
  year: "2014 - 2019",
  description: "Computer Science foundations, projects with game development technologies", 
}
]

export const Education: FC<MyProps> = () =>
		<div className=''>
			{educatuion.map((item, index) => {
				return (
					<div className='flex flex-col' key={index}>
						<div className='flex'>
						<h3 className='text-xl font-bold flex-1'>{item.title}</h3>
						<h3 className='text-xl font-bold'>{item.year}</h3>
						</div>
						<h3 className='text-xl font-bold'>{item.university}</h3>
						<p className='text-xl'>{item.description}</p>
						<Link to='/'>Read more...(coming soon)</Link>
					</div>
				)
			})
			}
		</div>