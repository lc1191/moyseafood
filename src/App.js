import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import NotFoundPage from './components/NotFoundPage';
import User from './components/User';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hook useEffect the fetch data JSON
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('JSON data cannot be displayed')
        }

        let actualData = await response.json();
        setData(actualData);
        setError(null);

      } catch (err) {
        setError(err.message);
        setData(null);

      } finally {
        setLoading(false);
      }
    }
    getData()
  });

  return (
    <>
      {/* Loading JSON */}
      {loading && 
        <div style={{ 
          marginTop:'50px', 
          textAlign:'center', 
          fontSize:'20px', 
          fontWeight:'bold', 
          color:'indigo', 
          margin: '0 auto' 
          }}>Please wait, the list is loading...</div>}

      {/* Error on JSON */}
      {error && 
      <div style={{ 
        marginTop:'50px', 
        textAlign:'center', 
        fontSize:'20px', 
        fontWeight:'bold',
        color:'tomato' 
        }}>{`${error}`}</div>}

      {/* Data suscessful */}
      {data && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List data={data} />} />
            <Route path="user" element={<User data={data} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )

}

export default App;