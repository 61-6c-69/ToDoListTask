import './bootstrap';

//lib
import React from 'react'
import ReactDOM from 'react-dom/client'

//utils
import {createBrowserRouter, RouterProvider} from 'react-router'

//pages
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

function RouterConfig(){
	//login token
	if(!(localStorage.getItem("token") === null)){
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token")
	}
	
	//
	//routers 
	//
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home/>
		},{
			path: '/dash',
			element: <Dashboard/>
		}
	])
	
	return(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
}

ReactDOM.createRoot(document.getElementById('app')).render(
	<RouterConfig/>
);
