import bg from '../../../public/bckgrnd.png';

import React from 'react';

const About = () => {
  // const styles = `
  //   .about {
  //     min-height: 100vh;
  //     display: flex;
  //     align-items: center;
  //     background-image: 'url(${bg.src})'';
  //     background-repeat: no-repeat;
  //     background-size: cover;
  //     width: '100%',
  //     height: '100%',

  //   }

  //   .about .content {
  //     padding: 1.4rem 7%;
  //     margin: 2em 0;
  //     max-width: 60rem;
  //   }

  //   .about .content h1 {
  //     font-size: 3em;
  //     color: #fff;
  //     text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  //   }

  //   .about .content .line-beside-text {
  //     display: flex;
  //     align-items: center;
  //     margin: 0 19rem 0 0;
  //   }

  //   .about .content .desc {
  //     margin: 0.5rem 16rem 0 0;
  //   }

  //   .about .content .line-beside-text hr {
  //     margin: 0 1em 0 0;
  //     flex-grow: 1;
  //     height: 1px;
  //     background-color: var(--primary); /* Adjust color as needed */
  //   }
  // `;

  return (
    <div className="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundImage: `url('../img/bckgrnd.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <main className="content" style={{ padding: '1.4rem 7%', margin: '2em 0', maxWidth: '60rem' }}>
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
