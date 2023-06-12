import React, { FC } from 'react'
import Heading from './components/Heading'
import { StaticImage } from 'gatsby-plugin-image'

interface MyProps { }

const References: FC<MyProps> = () => {

	return (
		<div className='' id='references'>
			<Heading title='References' />

			<figure className="max-w-screen-md mx-auto text-center mt-3">
				<blockquote>
					<p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lorem porttitor, imperdiet eros et, vestibulum turpis. Suspendisse potenti. Donec magna odio, finibus a cursus vitae, congue a dolor. Sed dapibus in mauris non molestie. Quisque ultrices dui in erat semper commodo."</p>
				</blockquote>
				<figcaption className="flex items-center justify-center mt-6 space-x-3">
						<StaticImage src='../images/avatar.png' className="w-6 h-6 rounded-full" alt="github logo" layout='constrained' />
						<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
							<cite className="pr-3 font-medium text-gray-900 dark:text-white">Michaela Muster</cite>
							<cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Position at Company</cite>
						</div>
				</figcaption>
			</figure>
		</div>
	)
}

export default References;