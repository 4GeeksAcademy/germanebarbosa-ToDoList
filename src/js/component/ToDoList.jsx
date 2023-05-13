import React from "react";
import { useState } from "react";

const Home = () => {
	const [task,setTask] = useState('')
	const [tasks,setTasks] = useState([])

	// Add into an array => concat
	// Delete from array => filter
	// Udate => map

	return (
		<>
			<div className="imagendefondo">
				<div className="container">
					<h1 className="display-2 text-center"><strong>Todo's</strong></h1>
					<div className="">
						<ul>
							<li>
								<input 
									type="text" 
									value={task} 
									onChange={(e)=>setTask(e.target.value)}
									onKeyDown={(e)=> {
										if (e.key === "Enter"){
											console.log(task)
											setTasks(tasks.concat(task));
											setTask("")
										}
									}}
									placeholder="What do you need to do?"/>
							</li>
							{tasks.map((item,index) => 
								<li>
									{item} <i className="fas fa-trash float-end" 
										onClick={() => 
											setTasks(
												tasks.filter(
													(t,currentIndex) => 
														index != currentIndex
														)
													)
												}
											></i>
								</li>
							)}
							<div>24 Tasks</div>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
