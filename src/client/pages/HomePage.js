import React from 'react';

const Home = () => {
  return (
    <div className='center-align' style={{ marginTop: '200px' }}>
      <h3 className='welcomeHeader'>Welcome</h3>
      <p>Check out these awesome features</p>

      <style jsx>
        {`
        .welcomeHeader {
          color: red;
        }
      `}
      </style>
    </div>
  );
};

export default {
  component: Home
};