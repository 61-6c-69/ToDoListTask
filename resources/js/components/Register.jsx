import {useState} from 'react'
import axios from 'axios'

export default function Register(){
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	
	const register_handler = async() =>{
		if(password !== confirmPassword)
			return
		
		if(email === '' || name ==='')
			return
		
		setLoading(true)
		
		const result = await axios.post('auth/register', {
			name: name,
			email: email,
			password: password,
			password_confirmation: confirmPassword
		}).then((response)=>{
			setError('success, please login')
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
				<label>Name</label>
				<input type='name' className='input input-bordered w-full' placeholder='Name'
					onChange={(e)=>setName(e.target.value)}
				/>
			</div>
			
			<div>
				<label>Email</label>
				<input type='email' className='input input-bordered w-full' placeholder='test@example.com'
					onChange={(e)=>setEmail(e.target.value)}
				/>
			</div>
						
			<div>
				<label>Password</label>
				<input type='password' className='input input-bordered w-full' placeholder='your password'
					onChange={(e)=>setPassword(e.target.value)}
				/>
			</div>
			
			<div>
				<label>Password</label>
				<input type='password' className='input input-bordered w-full' placeholder='confirm password'
					onChange={(e)=>setConfirmPassword(e.target.value)}
				/>
			</div>
					
			<button 
				className='btn btn-primary btn-md w-full' 
				onClick={()=>register_handler()}
				disabled={loading ? 'true' : ''}
			>Register</button>
		</>
	)
}