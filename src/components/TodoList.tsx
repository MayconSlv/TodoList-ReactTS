import style from './TodoList.module.css';
import image from '../assets/Clipboard.svg';
import { Task } from './Task';


export function TodoList () {
  return (
    <div className={style.task__container}>
      <header className={style.header}>
        <div className={style.tasksInfo}>
          <p className={style.createdTask}>Tarefas criadas</p>
          <span className={style.value}>0</span>
        </div>
        
        <div className={style.tasksInfo}>
          <p className={style.completedTask}>Tarefas concluidas</p>
          <span className={style.value}>2 de 5  </span>
        </div>
      </header>

      <section className={style.tasks}>
        <div className={style.tasks__alert}>
          <img src={image} alt="" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>

        <Task />
      </section>
    </div>
  )
}