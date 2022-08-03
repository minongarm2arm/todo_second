import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLESTATUS_TODO = "TOGGLESTATUS_TODO";

// 액션 생성기
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLESTATUS_TODO, payload };
};

// Initial State
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "테스트 제목",
      body: "테스트 내용입니다",
      isDone: false,
    }
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload.todo],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLESTATUS_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        }),
      };
 
    default:
      return state;
  }
};

export { todos };