import React from 'react'
import "./Main.css"

function Main(props) {

  return (
    <>
      <main id="mymain">
        {props.children[0]}
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {(!props.searchedTodosCount && !props.totalTodoCount && !props.loading) && props.onEmptyTodos()}
        {(props.totalTodoCount && !props.searchedTodosCount) ? props.onEmptySearch() : ""}
        {(!props.error && !props.loading)? props.children[1] : ""}
        {props.children[2]}
        {props.children[3]}
      </main>
    </>
  );
}

export { Main };