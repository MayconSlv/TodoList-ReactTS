import logo from '../assets/Logo.svg';
import style from './Header.module.css';
import { PlusCircle } from 'phosphor-react';

export function Header () {
  return (

    <>
      <div className={style.header}>
        <img src={logo} alt="Logo da TodoList" />
      </div>

      
      <div className={style.input__container}>
        <input type="text" placeholder="Adicionar uma tarefa" className={style.input__area}/>
        <button className={style.input__button}>Criar<PlusCircle size={16}/></button>
      </div>
    </>
  )
}