import React from 'react'

const Todo = ({ index, todo, deleteTodo }) => (
  <div index={index}>
    {todo}
    <button type="button" onClick={() => deleteTodo(index)}>
      x
    </button>
  </div>
)

export default Todo
