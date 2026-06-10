import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, removeTodo } from "./todoSlice";

function Red() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo Redux</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Red;