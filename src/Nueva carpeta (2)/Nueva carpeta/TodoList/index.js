import './TodoList.css';
function TodoList(props){// componete
    return(
        <ul className="TodoList">
        {props.children}
      </ul>
    );
  
  }

  export { TodoList };