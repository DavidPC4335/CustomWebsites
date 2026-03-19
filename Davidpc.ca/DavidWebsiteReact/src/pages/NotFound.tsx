import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you may have entered the wrong URL.
            </p>
            <div className="not-found__buttons">
              <button className="main__btn">
                <Link to="/">Go Home</Link>
              </button>
              <button className="main__btn" style={{ marginLeft: '16px' }}>
                <Link to="/projects">View Projects</Link>
              </button>
            </div>
          </div>
          <div className="main__img--container">
            <div className="not-found__visual">
              <div className="not-found__icon">
                <span>🔍</span>
              </div>
              <div className="not-found__message">
                <h3>Nothing here!</h3>
                <p>Let's get you back on track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 