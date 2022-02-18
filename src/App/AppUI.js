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
  
  const {loading, error, searchedTodos, checkTodo, deleteTodo, searchValue, searchInputValue, completedTodos, totalTodoCount, setOpenModal, openModal } = React.useContext(TodoContext)

  return (
    <div id="init-container">
      <Header>
        <TodoSearch searchValue={searchValue} searchInputValue={searchInputValue}/>
      </Header>
      <Main>
        <TodoCounter completedTodos={completedTodos} totalTodoCount={totalTodoCount} loading={loading} />
        {loading ? <LoadingScreen /> : (!searchedTodos.length && !loading) ? <EmptyScreen /> :
          <TodoList>
            {error && <p>¡Error!</p>}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            ))}
          </TodoList>
        }
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
        {openModal && <Modal />}
      </Main>
      <Footer />
    </div>
  );
}

export { AppUI };