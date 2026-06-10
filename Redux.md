User Types
    |
React useState
    |
    v
text = "Learn Redux"

User Clicks Add
    |
    v
dispatch(addTodo(text))
    |
    v
Action Created

{
 type: "todos/addTodo",
 payload: "Learn Redux"
}

    |
    v
Reducer Runs
    |
    v
Store Updates
    |
    v
{
 todos: {
   items: [
     { id: 101, text: "Learn Redux" }
   ]
 }
}

    |
    v
useSelector Detects Change
    |
    v
React Re-renders
    |
    v
UI Updates