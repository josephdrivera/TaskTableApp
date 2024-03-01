import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();

	// Function to determine if the link is active
	const getNavLinkClass = (path) => {
		return location.pathname === path
			? "text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 rounded-md mb-2"
			: "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 rounded-md mb-2";
	};

	return (
		<div className="flex">
			<nav className="bg-gray-800 w-64 min-h-screen p-5">
				<NavLink to="/dashboard" className={getNavLinkClass("/dashboard")}>
					{/* Dashboard icon here */}
					<span>Dashboard</span>
				</NavLink>
				<NavLink to="/tasks" className={getNavLinkClass("/tasks")}>
					{/* Tasks icon here */}
					<span>Tasks</span>
				</NavLink>
				<NavLink to="/projects" className={getNavLinkClass("/projects")}> {/* Corrected path */}
					{/* Projects icon here */}
					<span>Projects</span>
				</NavLink>
				<NavLink to="/profile" className={getNavLinkClass("/profile")}>
					{/* Profile icon here */}
					<span>Profile</span>
				</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
