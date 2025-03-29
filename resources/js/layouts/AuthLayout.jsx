import {useState} from 'react'

import Login from './../components/Login'
import Register from './../components/Register'

export default function AuthLayout(props){
	const [page, setPage] = useState('login')
	
	return(
		<div className='card bg-base-100 shadow-lg w-[400px] m-auto'>
			<div className='card-body'>
				<div className='card-title'>{page === 'login' ? 'Login' : 'Register'}</div>
				<div className='grid grid-cols-1 gap-4 mt-4'>
					{page === 'login' ?
						<Login/>
					:
						<Register/>
					}
					
					<div className='divider'>or</div>
						
					<button 
						className='m-auto text-warning'
						onClick={()=>setPage(( page === 'login' ? 'regsiter' : 'login'))}
					>{page === 'login' ? 'Register' : 'Login'}</button>
				</div>
			</div>
		</div>
	)
}