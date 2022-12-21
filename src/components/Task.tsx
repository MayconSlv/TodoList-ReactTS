import style from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
  return (
    <div className={style.task__container}>

      <div className={style.container}>
        <input type="checkbox"/>
        <p className={style.task__content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque consectetur excepturi ex .    
        </p>
      </div>

      <button className={style.task__button}>
        <Trash size={14} />
      </button>
    </div>
  )
}