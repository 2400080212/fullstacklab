import React, { useState, useEffect } from 'react';

const FetchLocalData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching from the public folder
    fetch('/data.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error("Local fetch error:", err));
  }, []);

  return (
    <div>
      <h3>Data using Fetch (Local JSON)</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchLocalData;