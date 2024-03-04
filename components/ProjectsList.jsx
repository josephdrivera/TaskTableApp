import ProjectItem from './ProjectItem';

const tableHeadings = [
	"Project Name",
	"Description",
	"Start Date",
	"End Date",
	"Priority",
	"Assignee",
	"Open Tasks",
	"Completed Tasks",
	"Progress"
];

const ProjectsList = ({ projects, tasks }) => {
	if (!Array.isArray(projects) || !Array.isArray(tasks)) {
		return null;
	}

	const getProjectTasks = (projectId) => tasks.filter(task => task.projectId === projectId);

	return (
		<table className="min-w-full leading-normal">
			<thead>
			<tr>
				{tableHeadings.map((heading, index) => (
					<th key={index} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
						{heading}
					</th>
				))}
			</tr>
			</thead>
			<tbody>
			{projects.map((project) => (
				<ProjectItem key={project.id} project={project} tasks={getProjectTasks(project.id)} />
			))}
			</tbody>
		</table>
	);
};

export default ProjectsList;
