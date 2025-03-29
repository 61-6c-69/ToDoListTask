import {useState} from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'

export default function Login(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const navigate = useNavigate()
	
	const login_handler = async() =>{
		if(email === '' || password === '')
			return
		
		setLoading(true)
		
		const result = await axios.post('auth/login', {
			email: email,
			password: password
		}).then((response)=>{
			localStorage.setItem('token', response.data.token)
			localStorage.setItem('user', JSON.stringify(response.data.user))
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
			navigate('/dash', { replace: true })
		}).catch((error) =>{
			setError(error.response.data.message)
			console.log(error)
		})
		
		setLoading(false)
	}
	return(
		<>
			{error}
			<div>
				<label>Email</label>
				<input type='email' className='input input-bordered w-full' placeholder='test@example.com'
					onChange={(e)=>setEmail(e.target.value)}/>
			</div>
						
			<div>
				<label>Password</label>
				<input type='password' className='input input-bordered w-full' placeholder='your password'
					onChange={(e)=>setPassword(e.target.value)}/>
			</div>
					
			<button 
				className='btn btn-primary btn-md w-full'
				onClick={()=>login_handler()}
				disabled={loading ? 'true' : ''}
			>Login</button>
		</>
	)
}