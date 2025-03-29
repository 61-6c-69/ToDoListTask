import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

export default function UpdateTask(props){
	const [title, setTitle] = useState('')
	const [des, setDes] = useState('')
	const [priority, setPriority] = useState('')
	const [ddate, setDDate] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const navigate = useNavigate()
	
	const create_handler = async()=> {
		if(title === '' || des === '' || ddate === '' || priority === ''){
			setError('fill all input')
		}
		
		setLoading(true)
		
		const result = await axios.put(`user/task/${props.id}`, {
			title: title,
			description: des,
			priority: priority,
			due_date: ddate
		}).then((response)=>{
			setError('Success')
			navigate('/dash', { replace: true })
		}).catch((error)=>{
			setError(error.response.data.message)
			console.log(error)
		})
		
		setLoading(false)
	}
	
	const get_tast_handler = async() => {
		const result = await axios.get(`user/task/${props.id}`)
		.then((response) => {
			setTitle(response.data.tasks[0].title)
			setDes(response.data.tasks[0].description)
			setPriority(response.data.tasks[0].priority)
			setDDate(response.data.tasks[0].due_date)
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	
	useEffect(()=>{
		get_tast_handler()
	}, [])
	return(
		<>
			{error}
			<div>
				<label>Title</label>
				<input type='text' className='input input-bordered w-full' value={title} placeholder='Title'
					onChange={(e)=>setTitle(e.target.value)}
				/>
			</div>
			
			<div>
				<label>description</label>
				<input type='text' className='input input-bordered w-full' value={des} placeholder='description'
					onChange={(e)=>setDes(e.target.value)}
				/>
			</div>
			
			<div>
				<label>priority</label>
				<select className='select select-bordered w-full' onChange={(e)=>setPriority(e.target.value)}>
					<option value={priority}>--{priority}--</option>
					<option value='low'>Low</option>
					<option value='medium'>medium</option>
					<option value='high'>high</option>
				</select>
			</div>
			
			<div>
				<label>dueDate</label>
				<input type='date' className='input input-bordered w-full' value={ddate} placeholder='date'
					onChange={(e)=>setDDate(e.target.value)}
				/>
			</div>
			
			<button 
				className='btn btn-primary w-full btn-md mt-4'
				onClick={()=>create_handler()}
				disabled={loading ? 'true': ''}
			>Update</button>
		</>
	)
}