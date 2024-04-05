import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  // Simulate some loading time (replace with your actual data fetching logic)
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="loader-container">
      {loading ? (
        <ClipLoader color={'#fff'} size={100} />
      ) : (
        <p>Content Loaded!</p>
      )}
    </div>
  );
};

export default Loader;
