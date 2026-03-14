import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div style={{padding:"30px"}}>
      <h2>User Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleChange}
      />

      <br/><br/>

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={user.age}
        onChange={handleChange}
      />

      <br/><br/>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
      />

      <h3>User Details</h3>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default App;