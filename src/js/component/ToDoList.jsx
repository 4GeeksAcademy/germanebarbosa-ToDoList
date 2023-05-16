import React from "react";
import { useState } from "react";

import fondo from "../../img/Fondo.jpg";

const Home = () => {
	const [task,setTask] = useState('')
	const [tasks,setTasks] = useState([])

	// Add into an array => concat
	// Delete from array => filter
	// Update => map
	//style={{backgroundImage: `url(${fondo})`,
	//backgroundRepeat: "no-repeat"}}
	return (
		<>
			<div>
				<div className="container">
					<h1 className="display-2 text-center"><strong>Todo's</strong></h1>
					<div>
						<ul>
							<li>
								<input 
									type="text" 
									value={task} 
									onChange={(e)=>setTask(e.target.value)}
									onKeyDown={(e)=> {
										if (e.key === "Enter" && !task == ''){
											console.log(task)
											setTasks(tasks.concat(task));
											setTask("")
										}
									}}
									placeholder="What do you need to do?"/>
							</li>
							{tasks.map((item,index) => 
								<li className="element">
									{item} <i className="icon fas fa-trash float-end" 
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
							<li className="footer">{tasks.length} Tasks</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
