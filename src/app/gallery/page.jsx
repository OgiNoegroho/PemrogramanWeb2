import React from 'react';

const Gallery = () => {
  
  return (
    <div className="gallery" style={{ display: 'flex', flexDirection: 'column', padding: '5em', minHeight: '100vh', alignItems: 'center' }}>
      <h2 style={{ padding: '1rem 1%', textAlign: 'center', color: 'var(--primary)' }}>G A L L E R Y</h2>
      <div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img1.jpg">
            <img id="img-gal" src="/img1.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 1 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img2.jpg">
            <img id="img-gal" src="/img2.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 2 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img3.jpg">
            <img id="img-gal" src="/img3.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 3 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img4.jpg">
            <img id="img-gal" src="/img4.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 4 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img5.jpg">
            <img id="img-gal" src="/img5.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 5 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img6.jpg">
            <img id="img-gal" src="/img6.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 6 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img7.jpg">
            <img id="img-gal" src="/img7.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 7 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img8.jpg">
            <img id="img-gal" src="/img8.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 8 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img9.jpg">
            <img id="img-gal" src="/img9.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 9 Description</p>
        </div>
        <div className="image-container" style={{ display: 'inline-block', textAlign: 'center', margin: '1% 1%' }}>
          <a href="img10.jpg">
            <img id="img-gal" src="/img10.jpg" alt="Image 1" style={{ height: '22.5rem', width: '12.2rem', border: '0.1rem solid #fff', borderRadius: '1%' }} />
          </a>
          <p>Image 10 Description</p>
        </div>
       
        {/* Repeat the above div structure for other images */}
      </div>
    </div>
  );
}

export default Gallery;
