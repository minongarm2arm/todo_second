// 삭제, 완료 & 취소 버튼

import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  const navigate = useNavigate();

  const onDetailHandler = (todo) => {
    navigate(`/todolist/${todo.id}`);
  };
  
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>

      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제
        </button>

        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"} {/* isDone이 true면 취소, false면 완료 */}
        </button>

        <button onClick={() => onDetailHandler(todo)}>
            상세 페이지
          </button>
      </div>
    </div>
  );
}

export default Todo;