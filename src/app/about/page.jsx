import bg from '../../../public/bckgrnd.png';
import React from 'react';

const About = () => {
  return (
    <div className="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <main className="content" style={{ padding: '1.4rem 7%', margin: '2em 0', maxWidth: '60rem' }}>
        {}
        <div className='hidden'>This is a string with a &quot;double quote&quot;.</div>
        {}
        <h1 style={{ fontSize: '3em', color: '#fff', textShadow: '1px 1px 3px rgba(1, 1, 3, 0.5)' }}>OGYA "OGI" <br /><span>SECIO NOEGROHO.S</span></h1>
        <div className="line-beside-text" style={{ display: 'flex', alignItems: 'center', margin: '0 19rem 0 0' }}>
          <hr style={{ margin: '0 1em 0 0', flexGrow: 1, height: '1px', backgroundColor: 'var(--primary)' }} />
          <p>29. FEBRUARI 2004</p>
        </div>
        <p className="desc" style={{ margin: '0.5rem 16rem 0 0' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil quidem, necessitatibus corrupti quasi tempore culpa numquam dolorum sequi explicabo magni neque provident maiores quo dolores, maxime natus commodi accusantium?</p>
      </main>
    </div>
  );
}

export default About;

