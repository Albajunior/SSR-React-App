import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTasks(response.data.slice(0, 10)); 
      } catch (error) {
        console.log('Error : ', error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map(task => (
          <li>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
