
import { Link } from 'gatsby'
import React, { FC } from 'react'

const menuItems = [{
	title: "Education",
	link: "#education",
}, {
	title: "Skills",
	link: "#education",
}, {
	title: "Projects",
	link: "#education",
}, {
	title: "Experience",
	link: "#education",
}, {
	title: "Contact",
	link: "#education",
}]

interface MyProps { }
export const Footer: FC<MyProps> = () =>
	<div className='sticky bottom-2 flex flex-row justify-center align-middle mt-4'>
		{menuItems.map((item, index) => {
			return (
				<div className='border-2 rounded-lg bg-primary mx-2 p-2 m-2' key={index}>
					<Link to="/" className=''>{item.title}</Link>
				</div>
			)
		})}
	</div>