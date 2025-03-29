import axios from 'axios'

export default function TaskDropDown(props){
	
	const change_status_handlet = (value) =>{
		props.update(props.task, 'status', 'wait...')
		
		axios.put(`user/task/${props.task}`, {
			status: value
		}).then((response)=>{
			props.update(props.task, 'status', value)
		}).catch((error)=>{
			props.update(props.task, 'status', '.error.')
			console.log(error)
		})
	}
	
	const delete_handler = () =>{
		props.update(props.task, 'title', 'wait...')
		axios.delete(`user/task/${props.task}`)
		.then((response)=>{
			props.remove(props.task)
		}).catch((error)=>{
			props.update(props.task, 'title', '.error.')
			console.log(error)
		})
	}
	
	return(
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-sm w-full">manage</div>
			<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				<li onClick={()=>change_status_handlet('pending')} className='p-4'>Pending</li>
				<li onClick={()=>change_status_handlet('progress')} className='p-4 text-warning'>in Progress</li>
				<li onClick={()=>change_status_handlet('completed')} className='p-4 text-success'>Completed</li>
				<li className=''></li>
				<li onClick={()=>delete_handler()} className='p-4 text-error'>Delete</li>
			</ul>
		</div>
	)
}