import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Input = styled.input`
  height: 2.5rem;
  width: 85%;
  margin: 1rem 0;
  border: 1px solid papayawhip;
  margin-right: 3px;
  border-radius: 3px;
  font-size: 1.3rem;
  color: darkslategray;
  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: teal;
  font-size: 1rem;
  border: none;
  background-color: #abf4e2;
  &:hover {
    border: teal;
    box-shadow: 0 0 10px teal;
  }
  &:focus {
    outline: none;
  }
`

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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
        />
        <Button type="submit"> + </Button>
      </Form>
    </>
  )
}

export default TodoForm
