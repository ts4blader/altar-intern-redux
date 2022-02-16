import React from "react";
import { useAppSelector, useAppDispatch } from "./states/hooks";
import { addUser, removeUser } from "./states/slices/usersSlice";

function App() {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch(addUser({ id: 1, name: "tris", email: "tris@gmail.com" }))
        }
      >
        Add user
      </button>
      <button onClick={() => dispatch(removeUser(1))}>Remove user</button>
      <button onClick={() => console.log(users)}>Show</button>

      <ul>
        {users.map((item) => (
          <li>{`Name: ${item.name}, email: ${item.email}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
