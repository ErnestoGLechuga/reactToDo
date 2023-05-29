import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />


      <TodoItem />


    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>✔</span>
      <p>llorar con la llorona</p>
      <span>❌</span>
    </li>
  )
}
export default App;
