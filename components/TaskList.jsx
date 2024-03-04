import TaskItem from './TaskItem';


const TaskDetailsPopup = ({ task, onClose }) => {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center">
			<div className="border p-4">
				<h3>Task Details</h3>
				<p>{task.description}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

const TaskEditPopup = ({ task, onClose }) => {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center">
			<div className="border p-4">
				<h3>Edit Task</h3>
				<p>{task.description}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

const TaskList = ({ tasks }) => {
	const [detailsVisible, setDetailsVisible] = useState(false);
	const [editVisible, setEditVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);

	if (!Array.isArray(tasks)) {
		console.error('Expected tasks to be an array, but received:', tasks);
		return <div>No tasks available</div>;
	}

	const tableHeadings = [
		"Task",
		"Status",
		"Due Date",
		"Task Description",
		"Priority",
		"Assignee",
		"Comments",
		"Actions",
		"Details",
		"Edit"
	];

	const onDetailsClick = (task) => {
		setSelectedTask(task);
		setDetailsVisible(true);
	};

	const onEditClick = (task) => {
		setSelectedTask(task);
		setEditVisible(true);
	};

	return (
		<div className="relative border border-gray-200 rounded overflow-x-auto w-full bg-white dark:bg-gray-800 dark:border-gray-700">
			<table className="w-full text-sm align-middle whitespace-nowrap">
				<thead>
				<tr>
					{tableHeadings.map((heading, index) => (
						<th
							key={index}
							className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
						>
							{heading}
						</th>
					))}
				</tr>
				</thead>
				<tbody>
				{tasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						onDetailsClick={onDetailsClick}
						onEditClick={onEditClick}
					/>
				))}
				</tbody>
			</table>
			{detailsVisible && selectedTask && (
				<TaskDetailsPopup
					task={selectedTask}
					onClose={() => setDetailsVisible(false)}
				/>
			)}
			{editVisible && selectedTask && (
				<TaskEditPopup
					task={selectedTask}
					onClose={() => setEditVisible(false)}
				/>
			)}
		</div>
	);
};

export default TaskList;
