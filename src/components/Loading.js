import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex spinner-container justify-content-center">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
)
}

export default Loading;
