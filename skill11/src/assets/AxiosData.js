import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data with Axios:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>Data using Axios (External API)</h3>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.slice(0, 5).map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AxiosData;