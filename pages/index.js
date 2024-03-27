import { useState } from "react";
import { getTodoList, addTodo, deleteTodo } from "./api/todo";
export default function MyPage({ initialData }) {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="add new todo"
        value={newTodo}
      />
      <button
        onClick={() => {
          addTodo({ name: newTodo }).then((res) => {
            getTodoList().then((res) => setTodoList(res));
          });
        }}
      >
        Click ME
      </button>
      <button onClick={() => getTodoList().then((res) => setTodoList(res))}>
        Get Data
      </button>
      <div style={{ marginTop: "50px" }}>
        {todoList.map((d, i) => {
          return (
            <div key={i} style={{ display: "flex", gap: "20px" }}>
              <p>{d.name}</p>
              <button
                onClick={() =>
                  deleteTodo(d._id).then(() => {
                    setTodoList((prv) => prv.filter((f) => f._id !== d._id));
                  })
                }
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
