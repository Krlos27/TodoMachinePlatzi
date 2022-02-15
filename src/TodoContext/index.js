import React from 'react'

import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todos, setTodos, loading, error] = useLocalStorage('savedTodos', [])
  const [searchInputValue, searchValue] = React.useState("")
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length

  let searchedTodos = [];

  if (!searchedTodos.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const todoText=todo.text.toLowerCase();
      const todoSearchText=searchInputValue.toLowerCase();
      return todoText.includes(todoSearchText)
    })
  }else{
    searchedTodos = todos
  }


  const checkTodo = (id) => {
    const todoIndex = todos.findIndex(todo => {
      return todo.id == id
    })

    const newTodos = [...todos]
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed=false
    }else{
      newTodos[todoIndex].completed=true
    }

    setTodos(newTodos)
  }

  const addTodo = text => {
    const newTodos = [...todos]
    if (newTodos.length==0) {
      newTodos.push({id:1, text:text, completed:false})
    }else{
      newTodos.push({id:todos[(todos.length)-1].id+1, text:text, completed:false})
    }
    setTodos(newTodos)
    setOpenModal(false)
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => {
      return todo.id == id
    })

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      todos,
      totalTodoCount: todos.length,
      completedTodos,
      searchInputValue,
      searchValue,
      searchedTodos,
      checkTodo,
      deleteTodo,
      openModal,
      addTodo,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }