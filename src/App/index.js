import './App.css';
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
import { EmptySearchScreen } from '../EmptySearchScreen'
import { Modal } from '../Modal'
import { useTodos } from './useTodos'

function App() {

  const {loading, error, searchedTodos, checkTodo, deleteTodo, setOpenModal, openModal, addTodo, completedTodos, totalTodoCount, searchValue, searchInputValue} = useTodos()

  return (
    <div id="init-container">
      <Header>
        <TodoSearch
        searchInputValue={searchInputValue}
        searchValue={searchValue}
        loading={loading}
        />
      </Header>
      <Main
        loading={loading}
        error={error}
        searchedTodosCount={searchedTodos.length}
        totalTodoCount={totalTodoCount}
        
        onLoading={() => <LoadingScreen />}
        onError={() => <p>¡Error!</p>}
        onEmptyTodos={() => <EmptyScreen />}
        onEmptySearch={() => <EmptySearchScreen />}
      >
        <TodoCounter
        loading={loading}
        completedTodos={completedTodos}
        totalTodoCount={totalTodoCount}
        />
        <TodoList
        searchedTodos={searchedTodos}
        todosItem={todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          />
        )}
        />
        <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
        />
      </Main>
      {openModal && <Modal setOpenModal={setOpenModal} addTodo={addTodo} />}
      <Footer />
    </div>
  );
}

export default App;