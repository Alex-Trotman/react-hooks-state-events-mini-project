import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setSelectedCategory] = useState("Code");
  const [text, setTaskInput] = useState("");

  function handleSelect(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInput(event) {
    setTaskInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ category, text });
    setSelectedCategory("");
    setTaskInput("");
  }

  const filteredCategoryList = categories.filter(
    (category) => category !== "All"
  );

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect} value={category}>
          {filteredCategoryList.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
