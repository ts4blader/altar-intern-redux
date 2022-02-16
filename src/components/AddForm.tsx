import React, { useState } from "react";
import { addUser } from "../states/slices/usersSlice";
import { useAppSelector, useAppDispatch } from "../states/hooks";

function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser({ id: users.length, name, email }));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
