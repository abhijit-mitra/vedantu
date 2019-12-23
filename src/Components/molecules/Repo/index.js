import React from 'react';

const Repo = ({data}) => (
  <div className="m-t-20">
    <div className='repo border p-30'>
        <div className="title">{data.name}</div>
        <div className="description">{data.description}</div>
        <div className='language'>{data.language || ''}</div>
    </div>
  </div>
);

export default Repo;
