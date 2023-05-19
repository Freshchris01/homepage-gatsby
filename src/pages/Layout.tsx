import React, {FC } from 'react'
import Header from './Header'
import Footer from './Footer'

interface MyProps{
	children: React.ReactNode
}

const Layout: FC<MyProps> = (props) =>
		<div className='container max-w-3xl font-primary pt-20 flex flex-col'>
			<Header />
			<main className='grow'>{props.children}</main>
			<Footer />
		</div>

export default Layout;
