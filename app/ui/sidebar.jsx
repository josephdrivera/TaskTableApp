"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
    ? "text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 rounded-md mb-2"
    : "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 rounded-md mb-2";
  };

  return (
    <div className="flex">

      <nav className="bg-gray-800 w-64 min-h-screen p-9">
        <Link href="/dashboard" legacyBehavior>
          <a className={`p-2 mb-2 rounded hover:bg-gray-700 ${isActive('/dashboard')}`}>
            Dashboard
          </a>
        </Link>
        <Link href="/tasks" legacyBehavior>
          <a className={`p-2 mb-2 rounded hover:bg-gray-700 ${isActive('/tasks')}`}>
            Tasks
          </a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className={`p-2 mb-2 rounded hover:bg-gray-700 ${isActive('/projects')}`}>
            Projects
          </a>
        </Link>
        <Link href="/profile" legacyBehavior>
          <a className={`p-2 mb-2 rounded hover:bg-gray-700 ${isActive('/profile')}`}>
            Profile
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
