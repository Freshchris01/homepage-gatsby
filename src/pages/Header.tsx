const imageUrl= "https://placehold.co/100x100"
import React, {FC } from 'react'

interface MyProps{}
export const Header: FC<MyProps> = () =>
		<div className=''>
			<img src={imageUrl} alt="logo" className='m-auto rounded-full'/>
			<p className='text-center'>Hello, my name is Christian.<br/>
I am Supporting companies on their Azure Cloud journey.<br/>
Cloud Architect & DevOps Engineer.<br/>
Let’s get in touch.</p>
		</div>