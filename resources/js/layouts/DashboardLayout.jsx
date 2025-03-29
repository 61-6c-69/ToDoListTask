import {useState} from 'react'

import Navbar from './../components/Navbar'
import CreateTask from './../components/CreateTask'
import ShowTasks from './../components/ShowTasks'

export default function AuthLayout(props){
	
	return(
		<div className='card bg-base-100 shadow-lg w-full md:w-[1000px] m-auto'>
			<div className='card-body'>
				<div className='card-title'>
					<Navbar/>
				</div>
				
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div>
						<CreateTask/>
					</div>
					<div className='col-span-2 h-[400px] md:h-full'>
						<ShowTasks/>
					</div>
				</div>
			</div>
		</div>
	)
}