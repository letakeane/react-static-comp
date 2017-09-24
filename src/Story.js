import React from 'react';
import Button from './Button';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <div className='story-author-info'>
          <img src={props.authImg} className='story-author-image' />
          <div className='story-author-text'>
            <h4>{props.authName}</h4>
            <h4>{props.estTime} read</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story;
