import React from 'react';

const priorityRowColors = {
	"low": "bg-emerald-100 dark:bg-emerald-700",
	"medium": "bg-orange-100 dark:bg-orange-700",
	"high": "bg-red-100 dark:bg-red-700"
};

const TaskItem = ({ task, onDetailsClick, onEditClick }) => {
	return (
		<tr className={`${priorityRowColors[task.priority.toLowerCase()]} even:bg-gray-50 dark:even:bg-gray-900/50`}>
			<td className="p-3">{task.name}</td>
			<td className="p-3">{task.status}</td>
			<td className="p-3">{task.dueDate}</td>
			<td className="p-3">{task.description}</td>
			<td className="p-3">{task.priority}</td>
			<td className="p-3">{task.assignee}</td>
			<td className="p-3">{task.comments}</td>
			<td className="p-3 text-center">
				{task.actions}
			</td>
			<td className="p-3 text-center">
				<button
					type="button"
					className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
					onClick={() => onDetailsClick(task)}
				>
					Details
				</button>
			</td>
			<td className="p-3 text-center">
				<button
					type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-blue-200 bg-blue-100 text-blue-800 hover:border-blue-300 hover:text-blue-900 hover:shadow-sm focus:ring focus:ring-blue-300 focus:ring-opacity-25 active:border-blue-200 active:shadow-none dark:border-blue-200 dark:bg-blue-200 dark:hover:border-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-500 dark:focus:ring-opacity-50 dark:active:border-blue-200 dark:active:bg-blue-200"
					onClick={() => onEditClick(task)}
				>
					Edit
				</button>
			</td>
		</tr>
	);
};

export default TaskItem;
