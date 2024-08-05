import React from 'react'
import { Link } from 'react-router-dom';

function Users() {
  return (
    <>
      <div>Users</div>
      <p>
        <Link to="/users/1">User 1</Link>
      </p>
      <p>
        <Link to="/users/2">User 2</Link>
      </p>
    </>
  );
}

export default Users