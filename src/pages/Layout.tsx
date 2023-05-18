import React, {FC } from 'react'
import { Header } from './Header'

interface MyProps{
	children: React.ReactNode
}

export const Layout: FC<MyProps> = (props) =>
		<div className='container max-w-3xl font-primary my-10'>
			<Header />
			<main>{props.children}</main>
			<footer>Footer</footer>
		</div>
