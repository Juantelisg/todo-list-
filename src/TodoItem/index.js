import { VscCheck } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

import './TodoItem.css'

function TodoItem(props) {    
    return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}        
        >
          <VscCheck/> {props.completed}
        </span>
        <p className={`TodoItem-p' ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p> 
        <span className='Icon Icon-delete' onClick={props.notCompleted}>
          <VscClose/>
        </span>
      </li>
    )
  }

  export { TodoItem }; 