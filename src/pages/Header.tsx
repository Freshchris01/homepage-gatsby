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
I am Supporting companies on their Azure Cloud journey.<br/>
Microsoft & CNCF Cloud Architect/DevOps Engineer.<br/>
Let’s get in touch.</p>
<div className='flex flex-row w-full' style={{height: "35px"}}>
				<StaticImage src='../images/github-mark.png' alt="github logo" layout='constrained' height={35}/>
				<StaticImage src='../images/linkedin-mark.png' alt="linkedin logo" layout='constrained' height={35}/>
				<StaticImage src='../images/mail.png' alt="mail logo" layout='constrained' height={35}/>
			</div>
		</div>

export default Header;