// Accomplishment.jsx

import React from 'react';

const Accomplishment = () => {
  
  return (
    <div className="accomplishment" style={{ padding: '5em', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ padding: '1rem 0 2rem 0', textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>Accomplishments</h1>
      <div className="accomp" style={{ display: 'inline-block', margin: '0 1rem', textAlign: 'center' }}>
        <div>
          <img src="/accomp1.jpg" alt="Accomplishment 1" style={{ width: '200px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }} />
          <p style={{ marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', color: '#777' }}>juara 2 porseni TIF</p>
        </div>
        
        {/* Add more accomplishments as needed */}
      </div>
    </div>
  );
}

export default Accomplishment;
