import React from 'react'
import styled from 'styled-components'

const TodoItem = styled.div`
  background-color: ${props =>
    props.completed ? ' paleturquoise' : 'peachpuff'};
  width: 100%;
  padding: 1rem;
  margin: 0.2rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  color: darkslategray;
`

const DeleteButton = styled.button`
  background-color: coral;
  border: none;
  border-radius: 50%;
  height: 1.3rem;
  width: 1.3rem;
  &:hover {
    border: 1px solid chocolate;
    box-shadow: 0 0 10px red;
  }
  &:focus {
    outline: none;
  }
`
const Todo = ({ index, todo, deleteTodo, completeTodo, completed }) => (
  <TodoItem
    index={index}
    onClick={() => completeTodo(index)}
    completed={completed}
  >
    {todo}
    <DeleteButton type="button" onClick={e => deleteTodo(e, index)} />
  </TodoItem>
)

export default Todo
