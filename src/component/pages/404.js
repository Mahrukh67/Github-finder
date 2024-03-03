import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  if(NotFound){
    return (
      <div className='all-center my-3'>
        <h1>Click to Home For Search  :(</h1>
        <p className='lead'>Looking for a Github Repo Click here</p>
  
        <Link to='/' className='btn btn-primary'>
          Well come
        </Link>
      </div>
    );
  }

  
  

};
