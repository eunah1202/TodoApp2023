import React from 'react'
import { MdRemoveCircleOutline, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import classNames from 'classnames';
import "../styles/TodoListItem.scss"

function TodoListItem({todo,onToggle,onRemove}) { //todo,onToggle함수 받았다고 써주기
  // todo객체를 통으로 받았기에 안에 있는 값들을 다시 구조분해할당으로 지정해줘야한다.
  const{id, text, checked} = todo;

  return (
    <div className="TodoListItem">
      {/* classNames라는 함수를 사용해서 'checkbox', checked:checked(후자 c가 t면 전자클라스이름 사용가능/ f면 전자클라스이름 사용x)를 사용할건데 true냐 false냐는 후자 checked에서 판별됨 -> checked:checked(속성과속성값이)가 같기 때문에 하나만 써줄 수 있다 -> checked */}
      {/* app컴포넌트에 true false값이 있기때문에 밑onclick에서 함수호출해 app컴포넌트로 보내줘야해;
      어떤거를 누르는지 id값으로 알려줘야해=> 밑에 ontoggle이라고 호출한 함수를 app컴포넌트에서 만들어줘야해*/}
      {/* onClick같은 경우는 함수를 하나 만들어주고 그거를 실행했을때 ontoggle이 실행되게 만들어줘야해 
      ex) ()=>{onToggle(id)} 이렇게 안쓰면 계속 onclick이벤트가 실행되기때문*/}
      <div className= {classNames('Checkbox', {checked})} onClick={()=>{onToggle(id)}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> } 
        <div className='text'>{text}</div>
      </div>
      <div className="remove" onClick={()=>{onRemove(id)}}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem