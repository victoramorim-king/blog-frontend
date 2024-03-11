import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then(response => {
        setPosts(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Erro ao buscar os posts:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Bem-vindo ao meu blog</h1>

      <h2>Últimos Posts:</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <li>Não há posts ainda! </li>
        )}
      </ul>
    </div>
  );
}

export default App;
