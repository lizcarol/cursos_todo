
import './TodoCounter.css';
function TodoCounter({total, completed}){// componete
   
    return(
        <h1 className="TodoCounter">
        Has completado {completed} de {total} TODOS
      </h1>
    );
  
  }

  export { TodoCounter };