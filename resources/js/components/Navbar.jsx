export default function Navbar(){
	const logout = () =>{
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		
		location.href = '/'
	}
	
	return(
		<div className="navbar">
			<div className="flex-1">{ JSON.parse(localStorage.getItem('user')).name }</div>
			<div className="flex-none">
				<button 
					className="btn btn-square btn-ghost text-error"
					onClick = {()=>logout()}
				>
					Logout
				</button>
			</div>
		</div>
	)
}