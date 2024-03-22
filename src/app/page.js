import React from 'react';

const Home = () => {

  return (
    <div className="home" style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <main className="home-content" style={{ margin: 'auto', padding: '1.4rem 7%', textAlign: 'center' }}>
        <h2 style={{ padding: '1.4rem 7%' }}>Hi, I'am <span style={{ color: 'var(--primary)' }}>Ogi</span></h2>
        <h1>CREATIVE WEB DEVELOPER</h1>
        <p>I enjoy designing websites and coding beautiful simple things</p>
      </main>
    </div>
  );
}

export default Home;
