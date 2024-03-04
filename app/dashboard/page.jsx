
import initialTasks from '../../public/initialTasks.json';
import initialProjects from '../../public/initialProjects.json';
import ProgressCard from '../../components/ProgressCard';
import TaskList from '../../components/TaskList';

const DashboardPage = () => {
	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
			<div className="w-full md:w-3/4 p-4">
				<h2 className="text-2xl leading-tight">Dashboard</h2>
				<ProgressCard tasks={initialTasks} />
				<div className="my-2 py-2 overflow-x-auto">
					<TaskList tasks={initialTasks} />
					{/* Include ProjectsList component if needed */}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
