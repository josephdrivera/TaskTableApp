import React from "react";
import TaskList from "../../components/TaskList";
import ProgressCard from "../../components/ProgressCard";
import ProjectsList from "../../components/ProjectsList";
import Layout from "../layout";

const DashboardPage = ({ tasks, projects }) => {
	if (!tasks || !projects) {
		return <div>Loading...</div>;
	}

	return (
		<Layout>
			<div className="container mx-auto px-4 sm:px-8 max-w-6">
				<div className="py-8">
					<div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
						<h2 className="text-2xl leading-tight">Dashboard</h2>
						<ProgressCard tasks={tasks} />
					</div>
					<div className="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6">
						<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
							<TaskList tasks={tasks} />
						</div>
						<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
							<ProjectsList projects={projects} tasks={tasks} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DashboardPage;
