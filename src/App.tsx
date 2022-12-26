import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 'f525fafjd',
      content: "estudar typesript",
      isCompleted: false,
    },
    {
      id: 'f83adsfj032',
      content: "criar projeto usando typesccrip",
      isCompleted: true,
    }
  ])

  function addTask (taskContent: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false,
      }
    ])
  }

  function isChecked (checked: boolean) {
    
  }

  return (
    <>
      <header>
        <Header onAddTask={addTask}/>
      </header>
      
      <TodoList tasks={tasks} />
    </>
  )
}
