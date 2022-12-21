import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      
      <main>
        <TodoList />
      </main>
    </div>
  )
}
