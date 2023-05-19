
import React, { FC } from 'react'

interface MyProps { 
	title: string
}
const Heading: FC<MyProps> = (props) =>
	<div className=''>
		<h1 className='text-xl font-bold'>{props.title}</h1>
		<hr className='mb-1'/>
	</div>

export default Heading;