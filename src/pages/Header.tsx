const imageUrl= "https://placehold.co/100x100"
import React, {FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface MyProps{}
const Header: FC<MyProps> = () =>
		<div id='home'>
			<div className='justify-center'>
			<StaticImage src='../images/portrait.webp' alt="logo" layout='fixed' width={170} className='m-auto rounded-full' />
			</div>
			<p className='text-center'>Hello, my name is Christian.<br/>
I am Supporting companies on their Azure Cloud journey.<br/>
Cloud Architect & DevOps Engineer.<br/>
Let’s get in touch.</p>
		</div>

export default Header;