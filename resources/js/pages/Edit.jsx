import { useParams } from 'react-router'
import DashboardLayout from './../layouts/DashboardLayout'
import UpdateTask from './../components/UpdateTask'

export default function Edit(){
	const { id } = useParams();
	return(
		<div>
			<DashboardLayout>
				<UpdateTask id={id}/>
			</DashboardLayout>
		</div>
	)
}