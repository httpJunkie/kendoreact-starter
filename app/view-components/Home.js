import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = `React Starter App Home`;
  });
  
  return (
    <div className="view-home">
      <h3>React Starter App</h3>
    </div>
  );
}

export default Home;    