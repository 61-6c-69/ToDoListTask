import {useState} from 'react'
import axios from 'axios'

export default function CreateTask(){
	const [title, setTitle] = useState('')
	const [des, setDes] = useState('')
	const [priority, setPriority] = useState('')
	const [ddate, setDDate] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	
	const create_handler = async()=> {
		if(title === '' || des === '' || ddate === '' || priority === ''){
			setError('fill all input')
		}
		
		setLoading(true)
		
		const result = await axios.post('user/task', {
			title: title,
			description: des,
			priority: priority,
			due_date: ddate
		}).then((response)=>{
			setError('Success')
		}).catch((error)=>{
			setError(error.response.data.message)
			console.log(error)
		})
		
		setLoading(false)
	}
	return(
		<>
			{error}
			<div>
				<label>Title</label>
				<input type='text' className='input input-bordered w-full' placeholder='Title'
					onChange={(e)=>setTitle(e.target.value)}
				/>
			</div>
			
			<div>
				<label>description</label>
				<input type='text' className='input input-bordered w-full' placeholder='description'
					onChange={(e)=>setDes(e.target.value)}
				/>
			</div>
			
			<div>
				<label>priority</label>
				<select className='select  select-bordered w-full' onChange={(e)=>setPriority(e.target.value)}>
					<option value='low'>Low</option>
					<option value='medium'>medium</option>
					<option value='high'>high</option>
				</select>
			</div>
			
			<div>
				<label>dueDate</label>
				<input type='date' className='input input-bordered w-full' placeholder='date'
					onChange={(e)=>setDDate(e.target.value)}
				/>
			</div>
			
			<button 
				className='btn btn-primary w-full btn-md mt-4'
				onClick={()=>create_handler()}
				disabled={loading ? 'true': ''}
			>Create</button>
		</>
	)
}