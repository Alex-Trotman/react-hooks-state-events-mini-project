import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [stateTasks, setTasks] = React.useState(TASKS)
  const [stateCategories, setCategories] = useState(CATEGORIES)
  const [clickedCategory, setCategory] = useState( CATEGORIES )

  function deleteTask(text){
    console.log(text, " has been deleted!");
    const newList = stateTasks.filter((task) => task.text !== text)
    setTasks(newList);
  }

  function handleCategoryClick(category){
    console.log(category, "category clicked!")
    // setCategory(category);
    filterByCategory(category)
  }

  console.log("AFTER:", clickedCategory)

  function filterByCategory(clickedCategory){
    const newFilter = stateTasks.filter((task) => task.category === clickedCategory)

    setTasks(newFilter);
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} clickedCategory={clickedCategory} stateCategories={stateCategories}/>
      <NewTaskForm />
      <TaskList tasks={stateTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
