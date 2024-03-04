const priorityBadgeColors = {
	"low": "bg-emerald-200 text-emerald-700",
	"medium": "bg-orange-200 text-orange-700",
	"high": "bg-red-200 text-red-700"
};

const ProjectItem = ({ project, tasks }) => {
	const totalTasks = tasks.length;
	const completedTasksCount = tasks.filter(task => task.status === "completed").length;
	const progressPercentage = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;

	const progressBarClasses = {
		rose: "bg-rose-600",
		orange: "bg-orange-600",
		emerald: "bg-emerald-600"
	};

	const progressBarBackgroundClasses = {
		rose: "bg-rose-100",
		orange: "bg-orange-100",
		emerald: "bg-emerald-100"
	};

	const progressBarColor = progressPercentage <= 30 ? "rose" :
		progressPercentage <= 60 ? "orange" : "emerald";

	const progressBarTitle = progressPercentage <= 30 ? "Just started" :
		progressPercentage <= 60 ? "Pending" : "Almost done";

	const priority = project.priority && typeof project.priority === 'string' ? project.priority.toLowerCase() : 'default';

	return (
		<tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{project.name}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{project.description}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{project.startDate}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{project.endDate}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className={`inline-flex px-2 py-1 text-sm rounded-full ${priorityBadgeColors[priority]}`}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </span>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{project.assignee}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tasks.filter(task => task.status !== "completed").length}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{completedTasksCount}</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<div className="space-y-6">
					<div className="space-y-1">
						<h3 className="font-semibold">{progressBarTitle}</h3>
						<div className={`flex items-center w-full h-4 rounded-full overflow-hidden ${progressBarBackgroundClasses[progressBarColor]}`}>
							<div role="progressbar" aria-valuenow={progressPercentage} aria-valuemin={0} aria-valuemax={100} className={`flex items-center justify-center self-stretch transition-all duration-500 ease-out rounded-full text-xs font-medium ${progressBarClasses[progressBarColor]}`} style={{ width: `${progressPercentage}%` }}>
								{`${progressPercentage.toFixed(0)}%`}
							</div>
						</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default ProjectItem;
