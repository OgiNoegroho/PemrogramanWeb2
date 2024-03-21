import React from 'react';

const Portfolio = () => {
  const styles = `
    .porto {
      min-height: 100vh;
      padding: 5em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .porto h1 {
      padding: 1rem 0 1.4rem 0;
      text-align: center;
      font-size: 2.5rem;
      color: #333; 
    }

    .porto .recentproject {
      margin-top: 2rem;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
    }

    .porto h2 {
      font-size: 1.8rem;
      color: #555; 
    }

    .porto .project-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1rem; 
    }

    .porto .project-details img {
      display: inline-block; 
      width: 23.2rem;
      border-radius: 10px; 
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); 
      margin-bottom: 1rem; 
    }

    .porto .project-details p {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      color: #777;
    }
  `;

  return (
    <div className="porto" style={{ minHeight: '100vh', padding: '5em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ padding: '1rem 0 1.4rem 0', textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>Portfolio</h1>
      <h2 style={{ fontSize: '1.8rem', color: '#555' }}>See my most recent project:</h2>

      <div className="recentproject" style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}>
        <div className="project-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1rem' }}>
          <img src="img/mazesolverproject3.png" alt="Maze Solver Project" style={{ display: 'inline-block', width: '23.2rem', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', marginBottom: '1rem' }} />
          <p style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#777' }}>Simple Maze Solver</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
