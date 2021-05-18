import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === "") return;
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: newTaskTitle, done: false },
    ]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const tasksUpdated = tasks.map((current) => {
      if (current.id !== id) return current;

      Object.assign(current, { done: !current.done });

      return current;
    });

    setTasks(tasksUpdated);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const tasksFiltered = tasks.filter((current) => current.id !== id);

    setTasks(tasksFiltered);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
