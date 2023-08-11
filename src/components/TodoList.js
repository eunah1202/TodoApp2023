import React from 'react'
import TodoListItem from './TodoListItem'

// app.js에서 크랍스형태로 보낸 todos를 구조분해 할당형식으로 받았다. 
// app.js에서 크랍스형태로 보낸 onToggle를 구조분해 할당형식으로 받았다. 
function TodoList({todos,onToggle,onRemove}) {
  return (
    <div className="TodoList">
      {/* list에서 받은것을 item에서 호출해줘야함; todos배열에 있는 객체(todo)호출해준다 */}
      {todos.map(todo =>(
        <TodoListItem 
          //고유한 key값지정해줘야해서 todo의 id지정함
          key={todo.id}
          // todo값 통채로 보냄
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default TodoList