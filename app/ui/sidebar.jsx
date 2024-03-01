"use client";
import Link from 'next/link'; // Make sure this import is correct
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? 'bg-gray-900 text-white' : 'text-gray-300';
  };

  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-xl font-semibold">Brand Logo</h1>
      </div>

      <nav className="flex flex-col p-5">
        {/* Apply legacyBehavior to each Link */}
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
