import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>PageNot Found</h1>
        <p>Hmmm, we're unable to find that page.</p>
        <Link to="/" className="button button--link">HEAD HOME</Link>
      </div>
    </div>
  );
};
