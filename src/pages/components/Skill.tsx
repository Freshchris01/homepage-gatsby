
import React, { FC } from 'react'

interface MyProps {
	title: string,
	scale: number
}
const Skill: FC<MyProps> = (props) =>
	<div className='border rounded-lg bg-primary mr-2 mt-1 p-2' key={"skill-" + props.title}>
		{props.title + "  " + "+".repeat(props.scale)}
	</div>

export default Skill;