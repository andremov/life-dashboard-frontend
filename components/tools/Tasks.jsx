import React from "react";
import { MovableCard } from "../Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLongArrowAltRight,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedButton } from "../Buttons";

export function Tasks({ visible, toggleCard }) {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const toggleTask = (key) => {
    const curTasks = [...tasks];
    curTasks[key].done = !curTasks[key].done;
    setTasks(curTasks);
  };

  return (
    <MovableCard visible={visible} className={"tasks"} toggleCard={toggleCard}>
      {tasks.map((item, i) => (
        <Task key={i} toggleTask={() => toggleTask(i)} {...item} />
      ))}
      <TaskInput addTask={addTask} />
    </MovableCard>
  );
}

const Task = ({ name, done, toggleTask }) => (
  <div className={`task-item ${["", "checked"][+done]}`} onClick={toggleTask}>
    <div className={"task-item__check-box"}>
      {done && <FontAwesomeIcon icon={faCheck} />}
    </div>
    <div className={"task-item__label"}>{name}</div>
  </div>
);

const TaskInput = ({ addTask }) => {
  const [name, setName] = React.useState("");

  const handleAdd = () => {
    if (name) {
      addTask({ name, done: false });
      setName("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={"new-task-item"}>
      <input
        className={"new-task-item__input"}
        onKeyDown={handleEnter}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ThemedButton
        disabled={!name}
        onClick={handleAdd}
        className={"new-task-item__button"}
        icon={faPlus}
      />
    </div>
  );
};
