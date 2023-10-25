import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [stateTasks, setTasks] = useState(TASKS);
  // const [stateCategories, setCategories] = useState(CATEGORIES);
  const [clickedCategory, setCategory] = useState("All");

  function deleteTask(text) {
    console.log(text, " has been deleted!");
    const newList = stateTasks.filter((task) => task.text !== text);
    setTasks(newList);
  }

  const filteredTasks = stateTasks.filter(
    (task) => task.category === clickedCategory || clickedCategory === "All"
  );

  function handleCategoryClick(category) {
    console.log(category, "category clicked!");
    setCategory(category);
    // filterByCategory(category);
  }

  function createTask(taskObj) {
    const newTasks = [...stateTasks, taskObj];
    setTasks(newTasks);
  }

  console.log("StateTasks:", stateTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryClick={handleCategoryClick}
        clickedCategory={clickedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={createTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
