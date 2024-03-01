import '../assets/styles/global.css'

export const metadata = {
	  title: 'Task Manager App',
  description: 'A simple task manager app',
	keywords: 'task, manager, app'

}
const MainLayout = ({children}) => {
	  return (
	<html lang={'en'}>
	<body>
	<div> {children} </div>
	</body>

	</html>
  )
}

export default MainLayout;