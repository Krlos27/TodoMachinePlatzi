import React from 'react'
import "./TodoList.css"

function TodoList(props) {
  return (
    <>
    <section className="todo-list-container">
        {props.searchedTodos.length >= 1 && props.searchedTodos.map(props.todosItem)}
    </section>
    </>
  );
}

export { TodoList };