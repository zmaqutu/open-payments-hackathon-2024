
function AppGrid() {
	const apps = Array(24).fill("App");

	return (
		<div className="grid grid-cols-4 gap-4 p-4">
		  {apps.map((app, index) => (
			<div 
			  key={index} 
			  className="h-20 bg-gray-900 flex items-center justify-center rounded-lg shadow-md"
			>
			  {app} {index + 1}
			</div>
		  ))}
		</div>
	  );
}

export default AppGrid;
