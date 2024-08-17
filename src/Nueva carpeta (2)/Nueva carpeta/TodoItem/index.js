
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../DeleteIcon'
import './TodoItem.css';
function TodoItem(props){// componete
    return(
      <li className="TodoItem">
        <CompleteIcon 
         
          completed={props.completed}
          onComplete={props.onComplete}
         />
          {/* <span className={`Icon Icon-check ${props.completed && 
              "Icon-check--active"}`}
              onClick={props.onComplete}
              >
        V
      </span>*/}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
       completed={props.onDelete}
       onDelete={props.onDelete}
      />
     {/*   <span className="Icon Icon-delete"  onClick={props.onDelete}>
        X
       
      </span>*/}
      </li>
    );
  
  }
  export { TodoItem };