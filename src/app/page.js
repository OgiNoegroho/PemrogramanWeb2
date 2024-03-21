import React from 'react';

const Home = () => {
  const styles = `
    .home {
      display: flex;
      min-height: 100vh;
      align-items: center;
    }

    .home .home-content {
      margin: auto;
      padding: 1.4rem 7%;
      text-align: center;
    }

    .home .home-content h2 {
      padding: 1.4rem 7%;
    }

    .home .home-content h2 span {
      color: var(--primary);
    }
  `;

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
