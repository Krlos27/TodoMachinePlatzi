import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoSearch } from '../TodoSearch'
import { LoadingScreen } from '../LoadingScreen'
import { EmptyScreen } from '../EmptyScreen'
import { Modal } from '../Modal'

import { TodoContext } from '../TodoContext'


function AppUI() {
  
  const {loading, error, searchedTodos, checkTodo, deleteTodo, setOpenModal, openModal, addTodo, completedTodos, totalTodoCount, searchValue, searchInputValue} = React.useContext(TodoContext)

  return (
    <div id="init-container">
      <Header>
        <TodoSearch searchInputValue={searchInputValue} searchValue={searchValue}/>
      </Header>
      <Main>
        <TodoCounter loading={loading} completedTodos={completedTodos} totalTodoCount={totalTodoCount} />
        {loading ? <LoadingScreen /> : (!searchedTodos.length && !loading) ? <EmptyScreen /> :
          <TodoList>
            {error && <p>¡Error!</p>}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            ))}
          </TodoList>
        }
        <CreateTodoButton  setOpenModal={setOpenModal} openModal={openModal} />
        {openModal && <Modal setOpenModal={setOpenModal} addTodo={addTodo} />}
      </Main>
      <Footer />
    </div>
  );
}

export { AppUI };