import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (value, index) => {
    const newTodoArray = [...todos, { text: value, index }]
    setTodos(newTodoArray)
  }

  const deleteTodo = index => {
    let todosClone = [...todos]
    todosClone.splice(index, 1)
    setTodos(todosClone)
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={todo + index}
          index={index}
          todo={todo.text}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  )
}

export default App
