import React from 'react';
import './App.css';

const Member = ({path, name, role, funFact}) => {
  return (
    <article className='card'>
      <img className='team-photo' src={path} alt={name} />
      <h2 className='text'>{name}</h2>
      <p className='text'>{role}</p>
      <p className='text'>{funFact}</p>
    </article>
  )
}

export default Member;
