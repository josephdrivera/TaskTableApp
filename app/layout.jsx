import '../assets/styles/global.css'
import Sidebar from '../components/Sidebar'



export const metadata = {
	  title: 'Task Manager App',
  description: 'A simple task manager app',
	keywords: 'task, manager, app'

}
const MainLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-grow flex pt-8">
				<div className="w-full max-w-6xl">
					{children}
				</div>
			</main>
		</div>
	)
}

export default MainLayout;