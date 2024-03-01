'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  // Adjust the function to apply styles based on your design
  const getNavLinkClass = (path) => {
    return pathname === path
      ? "text-gray-300 bg-blue-700 px-4 py-3 rounded-l-full" // Active link styles
      : "text-gray-300 hover:bg-gray-700 px-4 py-3"; // Inactive link styles
  };

  return (
    <div className="flex">
      <nav className="bg-dark-800 w-64 min-h-screen p-5 flex flex-col">
        <Link href="/dashboard" className={getNavLinkClass("/dashboard")}>
          <span>Dashboard</span>
        </Link>
        <Link href="/tasks" className={getNavLinkClass("/tasks")}>
          <span>Tasks</span>
        </Link>
        <Link href="/projects" className={getNavLinkClass("/projects")}>
          <span>Projects</span>
        </Link>
        <Link href="/profile" className={getNavLinkClass("/profile")}>
          <span>Profile</span>
        </Link>
        {/* Add additional links as needed */}
      </nav>
    </div>
  );
};

export default NavBar;
