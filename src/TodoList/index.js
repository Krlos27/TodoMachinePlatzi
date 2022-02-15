import React from 'react'
import "./TodoList.css"

function TodoList(props) {
  return (
    <>
    <section className="todo-list-container">
        {props.children}
    </section>
    </>
  );
}

export { TodoList };