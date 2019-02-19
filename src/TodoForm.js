import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputValue) return
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
        />
        <button type="submit"> + </button>
      </form>
    </>
  )
}

export default TodoForm
