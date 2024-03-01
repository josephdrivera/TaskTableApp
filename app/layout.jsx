import '../assets/styles/global.css'
import NavBar from '../components/NavBar';

export const metadata = {
	  title: 'Task Manager App',
  description: 'A simple task manager app',
	keywords: 'task, manager, app'

}
const MainLayout = ({children}) => {
	  return (
	<html lang={'en'}>
	<body>
		<NavBar />
	<main> {children} </main>
	</body>

	</html>
  )
}

export default MainLayout;