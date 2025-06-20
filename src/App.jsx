import UserCards from './components/UserCards';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
];

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>User List</h2>
      <UserCards users={dummyUsers} />
    </div>
  );
}

export default App;
