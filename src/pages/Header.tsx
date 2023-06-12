const imageUrl= "https://placehold.co/100x100"
import React, {FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface MyProps{}
const Header: FC<MyProps> = () =>
		<div id='home'>
			<div className='justify-center'>
			<StaticImage src='../images/portrait.webp' alt="portrait image" layout='fixed' width={170} className='m-auto rounded-full' />
			</div>
			<p className='text-center'>Hello, my name is Christian.<br/>
I am supporting companies on their Azure Cloud journey.<br/>
Microsoft & CNCF Certified Cloud Architect/DevOps Engineer.<br/>
Let’s get in touch.</p>
<div className='flex flex-row w-full justify-center mt-2' style={{height: "35px"}}>
				<a href="https://github.com/Freshchris01" target="_blank" rel="noreferrer">
				<StaticImage src='../images/github-mark.png' alt="github logo" layout='constrained' height={35}/>
				</a>
				<a href="https://linkedin.com/in/christian-diemers/" target="_blank" rel="noreferrer">
				<StaticImage src='../images/linkedin-mark.png' alt="linkedin logo" layout='constrained' height={35} className='mx-5'/>
				</a>
				<a href="mailto:someone@yoursite.com">
					<StaticImage src='../images/mail.png' alt="mail logo" layout='constrained' height={35}/>
				</a>
			</div>
		</div>

export default Header;