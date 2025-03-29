import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router'

import TaskDropDown from './TaskDropDown'

export default function ShowTsks(){
	const [tasks, setTasks] = useState([])
	
	const task_handler = () => {
		axios.get('user/task')
		.then((response)=>{
			setTasks(response.data.tasks)
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	
	const update_task_handler = (id, key, value) =>{
		setTasks(prevTasks => 
			prevTasks.map(task => 
				task.id === id ? { ...task, [key]: value } : task
			)
		);
	}
	
	const remove_task_handler = (id) =>{
		setTasks(prevTasks => 
			prevTasks.filter(task => 
				task.id !== id
			)
		);
	}
	
	useEffect(()=>{
		task_handler()
	}, [])
	return(
		<>
			<div className="overflow-x-auto h-full">
				<table className="table">
					<thead>
						<tr className='bg-base-200'>
							<th>#</th>
							<th>Task</th>
							<th>Status</th>
							<th>priority</th>
							<th>dueDate</th>
							<th>-</th>
						</tr>
					</thead>
					<tbody>
						{
							tasks.map((itm, key) => {
								return(
									<tr className={itm.status === 'completed' ? 'opacity-50' : ''}>
										<td>{key + 1}</td>
										<td>
											{itm.title}<br/>
											<span className='opacity-50'>{itm.description}</span>
										</td>
										<td>{itm.status}</td>
										<td>{itm.priority}</td>
										<td>{itm.due_date_str}</td>
										<td>
											<TaskDropDown task={itm.id} update={update_task_handler} remove={remove_task_handler}/>
											<Link to={`/dash/edit/${itm.id}`} className='btn btn-dark btn-sm ms-5'>Edit</Link>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				{ tasks.length <= 0 &&
					<div className='text-center p-5'>
						<Link to='/dash/create' className='btn btn-primary btn-md'>
							Create New Task
						</Link>
					</div>
				}
			</div>
		</>
	)
}