
import { Link } from 'gatsby'
import React, { FC } from 'react'

import scrollTo from 'gatsby-plugin-smoothscroll';

const menuItems = [
	{
		title: "Home",
		link: "#home"
	},
	{
		title: "Education",
		link: "#education",
	}, {
		title: "Experience",
		link: "#experience",
	}, {
		title: "Skills",
		link: "#skills",
	}, {
		title: "Projects",
		link: "#projects",
	}, {
		title: "Contact",
		link: "#contact",
	}]

interface MyProps { }
const Footer: FC<MyProps> = () =>
	<div className='sticky bottom-2 flex flex-row flex-wrap justify-center align-middle mt-4'>
		{menuItems.map((item, index) => {
			return (
				<div className='border-2 rounded-lg bg-primary mx-2 p-2 m-2' key={index}>
					<div className='' onClick={() => scrollTo(item.link)} > {item.title}</div>
				</div>
			)
		})}
	</div >

export default Footer;