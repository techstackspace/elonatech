import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);        // Holds the user data
  const [loading, setLoading] = useState(true);  // Shows loading state
  const [error, setError] = useState(null);      // Holds error info

  useEffect(() => {
    // Fetch user data on component mount
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Change to your actual API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Render loading
  if (loading) return <p>Loading users...</p>;

  // Render error
  if (error) return <p>Error: {error}</p>;

  // Render user list
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user._id || user.id}>
              {user.name} — {user.email}
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
}

export default UserList;
