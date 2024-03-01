const ProgressCard = ({ tasks }) => {
	const taskStatusCount = tasks.reduce((counts, task) => {
		counts[task.status] = (counts[task.status] || 0) + 1;
		return counts;
	}, {});

	const taskPriorityCount = tasks.reduce((counts, task) => {
		counts[task.priority] = (counts[task.priority] || 0) + 1;
		return counts;
	}, {});

	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
			<div className="-mx-3 md:flex mb-6">
				<div className="md:w-full px-3 mb-6 md:mb-0">
					<h2 className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Progress
					</h2>
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-grey-darker">Completed Tasks: {taskStatusCount['completed'] || 0}</h3>
							<h3 className="text-grey-darker">In Progress Tasks: {taskStatusCount['in progress'] || 0}</h3>
							<h3 className="text-grey-darker">Not Started Tasks: {taskStatusCount['not started'] || 0}</h3>
						</div>
					</div>
				</div>
				<div className="md:w-full px-3 mb-6 md:mb-0">
					<h2 className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						PRIORITY
					</h2>
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-grey-darker">High: {taskPriorityCount['High'] || 0}</h3>
							<h3 className="text-grey-darker">Medium: {taskPriorityCount['Medium'] || 0}</h3>
							<h3 className="text-grey-darker">Low: {taskPriorityCount['Low'] || 0}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressCard;
