"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation'; // import from next/navigation instead of next/router

export default function Sidebar() {
	const router = useRouter();

	const links = [
		{ href: '/dashboard', name: 'Dashboard' },
		{ href: '/projects', name: 'Projects' },
		{ href: '/tasks', name: 'Tasks' },
		{ href: '/profile', name: 'Profile' },

	];
// Add a linkClass function to conditionally apply classes to the active link
	const linkClass = (href) => {
		const baseClasses = "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 rounded-md mb-2 transition-all duration-150 ease-in-out";
		const activeClasses = "bg-gray-900";
		return `${baseClasses} ${router.pathname === href ? activeClasses : ""}`;
	};

	// Define the handleLogout function
	const handleLogout = () => {
		// Perform logout logic here
		console.log('Logging out...');

		// For example, you could clear user session data and redirect to the login page
		// Clear user session data (localStorage, cookies, etc.)
		// Redirect to login page
		router.push('/login');
	};
// Add the linkClass function to the return statement
	return (
		<div className="w-64 min-h-screen shadow-md bg-gray-800 flex flex-col">
			<nav className="pt-8 ps-4" >
				{links.map((link) => (
					<Link href={link.href} key={link.href}>
						<div className={linkClass(link.href)}>
							{link.name}
						</div>
					</Link>
				))}

				{/* Spacer to push logout to the bottom */}
				<div className="flex-grow"></div>
				{/* Logout button */}
				<button
					onClick={handleLogout}
					className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center justify-center px-2 py-2 rounded-md mb-2 transition-all duration-150 ease-in-out"
				>
					Logout
				</button>

			</nav>
		</div>
	);
}
