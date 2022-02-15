import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { LoadingScreen } from '../LoadingScreen'
import { EmptyScreen } from '../EmptyScreen'
import { Modal } from '../Modal'

import { TodoContext } from '../TodoContext'


function AppUI() {
  
  const {loading, error, searchedTodos, checkTodo, deleteTodo, openModal} = React.useContext(TodoContext)

  return (
    <div id="init-container">
      <Header />
      <Main>
        <TodoCounter />
        {loading ? <LoadingScreen /> : (!searchedTodos.length && !loading) ? <EmptyScreen /> :
          <TodoList>
            {error && <p>¡Error!</p>}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            ))}
          </TodoList>
        }
        <CreateTodoButton />
        {openModal && <Modal />}
      </Main>
      <Footer />
    </div>
  );
}

export { AppUI };