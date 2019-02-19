import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'do that' },
    { text: 'feed the cat' },
    { text: 'pet the bat' }
  ])

  const addTodo = value => {
    const newTodoArray = [...todos, { text: value }]
    setTodos(newTodoArray)
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={todo + index} index={index} todo={todo.text} />
      ))}
    </>
  )
}

export default App
