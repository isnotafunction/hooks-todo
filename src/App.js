import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'cat', index: 0, completed: false }
  ])

  const addTodo = (value, index) => {
    const newTodoArray = [...todos, { text: value, index, completed: false }]
    setTodos(newTodoArray)
  }

  const deleteTodo = (e, index) => {
    e.stopPropagation()
    let todosClone = [...todos]
    todosClone.splice(index, 1)
    setTodos(todosClone)
  }

  const toggleCompleted = item =>
    item.completed ? (item.completed = false) : (item.completed = true)

  const completeTodo = index => {
    let todosClone = [...todos]
    toggleCompleted(todosClone[index])
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
          completed={todo.completed}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  )
}

export default App
