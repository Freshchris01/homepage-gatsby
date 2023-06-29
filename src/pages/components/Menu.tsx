import React, { useImperativeHandle, useRef, useState } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby"

const menuItems = [
	{
		title: "Home",
		link: "#home"
	},
	{
		title: "Education",
		link: "#education",
	}, {
		title: "Experience",
		link: "#experience",
	}, {
		title: "Skills",
		link: "#skills",
	}, {
		title: "Projects",
		link: "#projects",
	}, {
		title: "Contact",
		link: "#contact",
	}, {
		title: "CV",
		link: "#cv",
	},
	{
		title: "References",
		link: "#references"
	}]

const Menu = React.forwardRef((props, ref) => {
	const [open, setOpen] = useState(true);
	const menuRef = useRef();

	const close = () => {
		setOpen(false);
	};

	const openMenu = () => {
		setOpen(true);
	};

	useImperativeHandle(ref, () => ({
		open: openMenu,
	}));

	return (
		<div
			role="button"
			tabIndex={0}
			className={`menu`}
			onClick={close}
			onKeyDown={close}
			style={{ visibility: open ? 'visible' : 'hidden', opacity: open ? 1 : 0 }}
		>
			{menuItems.map((item, index) => {
				return (
					<div className='border rounded-lg bg-primary mx-2 p-2 m-2 cursor-pointer' key={index}>
						<div className='' onClick={() => scrollTo(item.link)} > {item.title}</div>
					</div>
				)
			})}
		</div>
	);
});

export default Menu;