import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../states/hooks";
import { removeUser, setUsers } from "../states/slices/usersSlice";
import { getAll } from "../firebase/utils";

function UserList() {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const result = await getAll();
      dispatch(setUsers(result));
    };

    getData();
  }, []);

  return (
    <ul className="user-list">
      {users.map((item) => (
        <li className="user-item" key={item.id}>
          <div className="avatar">
            <img src={`https://picsum.photos/id/${item.id}/100`} alt="avatar" />
          </div>
          <div className="info">
            <p className="name">{item.name}</p>
            <p className="email">{item.email}</p>
          </div>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeUser(item.id))}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
