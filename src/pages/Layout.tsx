import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './components/Menu'
import { StaticImage } from 'gatsby-plugin-image'

interface MyProps {
	children: React.ReactNode
}

const Layout: FC<MyProps> = (props) => {
	const menuRef = React.useRef();

	function toggleMenu() {
		console.log("Test123w")
		menuRef.current?.open()
	}

	return (
		<div className='container max-w-3xl pt-20 flex flex-col'>
			<div className='w-auto flex justify-end'>
				<div onClick={toggleMenu} className='cursor-pointer'>
					<StaticImage layout='constrained' className='menu-button w-8 h-8' src={'../images/burger.png'} alt={''} />
				</div>
			</div>
			<Menu ref={menuRef} />
			<Header />
			<main className='grow'>{props.children}</main>
			<Footer />
		</div>
	)
}



export default Layout;
