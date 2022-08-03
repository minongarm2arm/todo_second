import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const TodoList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Todo] = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.id === id.toString())
  );

  return (
    <div>
      id:{id}
      <div>title:{Todo.title}</div>
      <div>body:{Todo.body}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로 돌아가기
      </button>
    </div>
  );
};

export default TodoList;