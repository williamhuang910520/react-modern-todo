import React from 'react'
import { Icon } from '@iconify/react';

const IconButton = ({ icon, onClick, className }) => {
	return (
		<button 
			className={className+` w-[36px] h-[36px] flex justify-center items-center p-2 rounded-full hover:bg-slate-100`}
			onClick={onClick}>
			<Icon className='w-full h-full' icon={icon}></Icon>
		</button>
	)
}

export default IconButton