import { useEffect, useState } from 'react';
import useUserStore from '../store/userStore';

const Users = () => {
  const { users, fetchUsers, addUser, updateUser, deleteUser } = useUserStore();
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        addUser(newUser);
        setNewUser({ name: '', email: '' });
      }}>
        <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id, { name: 'Updated Name' })}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
