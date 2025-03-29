import {useState} from 'react'

import Navbar from './../components/Navbar'
import CreateTask from './../components/CreateTask'
import ShowTasks from './../components/ShowTasks'

export default function DashboardLayout(props){
	
	return(
		<div className='card bg-base-100 shadow-lg w-full md:w-[1000px] m-auto'>
			<div className='card-body h-screen'>
				<div className='card-title'>
					<Navbar/>
				</div>
						
				<div className='h-full md:h-full'>
					{props.children}
				</div>
			</div>
		</div>
	)
}