import DashboardLayout from './../layouts/DashboardLayout'
import CreateTask from './../components/CreateTask'
export default function Create(){
	return(
		<div>
			<DashboardLayout>
				<CreateTask/>
			</DashboardLayout>
		</div>
	)
}