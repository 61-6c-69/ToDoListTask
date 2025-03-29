import DashboardLayout from './../layouts/DashboardLayout'
import ShowTasks from './../components/ShowTasks'
export default function Dashboard(){
	return(
		<div>
			<DashboardLayout>
				<ShowTasks/>
			</DashboardLayout>
		</div>
	)
}