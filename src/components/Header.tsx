import logo from '../assets/Logo.svg';
import style from './Header.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskContent: string) => void;
}

export function Header ({ onAddTask }:Props) {
  const [content, setContent] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(content)
    setContent("")
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
      setContent(event.target.value)
  }  
  return (

    <>
      <div className={style.header}>
        <img src={logo} alt="Logo da TodoList" />
      </div>

      
      <form className={style.input__container} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicionar uma tarefa" 
          className={style.input__area} 
          onChange={onChangeContent}
          value={content}
        />

        <button className={style.input__button}>Criar<PlusCircle size={16}/></button>
      </form>
    </>
  )
}