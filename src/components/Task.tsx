import style from './Task.module.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../App';
import { ChangeEvent, useState } from 'react';

interface Props {
  task: ITask;
}


export function Task({ task }: Props) {

  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked)
  return (
    <div className={style.task__container}>

      <div className={style.container}>
        <input type="checkbox" />
        <p className={style.task__content}>
          {task.content}    
        </p>
      </div>

      <button className={style.task__button}>
        <Trash size={14} />
      </button>
    </div>
  )
}