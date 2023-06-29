import React, { FC } from 'react'
import Heading from './components/Heading'
import { StaticImage } from 'gatsby-plugin-image';

interface MyProps { }

const CV: FC<MyProps> = () =>
	<div className='mb-2' id="cv">
		<Heading title='CV' />
		<a href="CV__Christian__Diemers.pdf" download className='mb'>
			<div className='flex align-middle'>
			<StaticImage layout='constrained' src='../images/download.png' className='w-6 h-6 mr-1' />
			<p>Click to download the CV.</p>
			</div>
		</a>
	</div>

export default CV;