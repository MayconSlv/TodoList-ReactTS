import style from './TodoList.module.css';
import { Task } from './Task';
import { ITask } from '../App';
import image from '../assets/Clipboard.svg';

interface Props {
  tasks: ITask[];
}

export function TodoList ( { tasks }: Props) {
  const taskQuantity = tasks.length;
  const completedTaks = tasks.filter((task) => task.isCompleted).length
  
  return (
    <div className={style.task__container}>
      <header className={style.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>
        
        <div>
          <p className={style.textPurple}>Tarefas concluidas</p>
          <span>{completedTaks} de {taskQuantity}</span>
        </div>
      </header>

      <section className={style.tasks}>

        {/* <div className={style.tasks__alert}>
          <img src={image} alt="" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div> */}
        
        {tasks.map(task => {
          return (
            <Task key={task.id} task={task}/>
          )
        })}
      </section>
    </div>
  )
}