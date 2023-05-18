import React from "react";
import { useState, useEffect } from "react";

import fondo from "../../img/Fondo.jpg";

const Home = () => {
	const [task,setTask] = useState('')
	const [tasks,setTasks] = useState([])

	// Add into an array => concat
	// Delete from array => filter
	// Update => map
	//style={{backgroundImage: `url(${fondo})`,
	//backgroundRepeat: "no-repeat"}}

	function getTasks (){
		fetch('https://assets.breatheco.de/apis/fake/todos/user/germanebarbosa', {
			method: "GET"})
		.then(response => response.json())
		.then((data) => console.log(data))
		}

	function sentTasks (){
		
		const newTasks = [
			{ label: "Make the bed", done: false },
			{ label: "Walk the dog", done: false },
			{ label: "Do the replits", done: false }
		]
		
		const tareas = tasks.map((item,index) =>
		[{label : item, done : false}]
		)
		console.log(tareas)


		fetch('https://assets.breatheco.de/apis/fake/todos/user/germanebarbosa', {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tareas.label)
   		})
		// .then(resp => {
		// 	console.log(resp.ok); // will be true if the response is successfull
		// 	console.log(resp.status); // the status code = 200 or code = 400 etc.
		// 	console.log(resp.text()); // will try return the exact result as string
		// 	return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		// })
		// .then(data => {
		// 	//here is where your code should start after the fetch finishes
		// 	console.log(data); //this will print on the console the exact object received from the server
		// })
		// .catch(error => {
		// 	//error handling
		// 	console.log(error);
		// });
	}

	useEffect(() => {
		getTasks()
	},[tasks])

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
											console.log(tasks)
											setTasks(tasks.concat(task));
											setTask("")
										}
									}}
									placeholder="What do you need to do?"/>
							</li>
							{tasks.map((item,index) => 
								<li key={index} className="element">
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
