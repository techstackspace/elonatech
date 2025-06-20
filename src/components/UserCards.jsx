import './UserCards.css'; 

function UserCards({ users }) {
  return (
    <div className="user-cards-container">
      {users.map(user => (
        <div className="user-card" key={user.id || user._id}>
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
