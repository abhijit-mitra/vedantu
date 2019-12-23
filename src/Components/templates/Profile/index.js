import React from 'react';
import {Button} from '../../atoms/';

const Profile = ({data}) => (
  <div className='profile'>
    <img src={'https://avatars1.githubusercontent.com/u/7427552?v=4'} alt="" width={'250px'} height={'350px'}/>
    <div>{data.name}</div>
    <div>{data.login}</div>
    <div>{data.bio}</div>
    <Button label={'Edit bio'}/>
    <hr/>
    <div>{data.company}</div>
    <div>{data.location}</div>
    <div>{data.email || ''}</div>
  </div>
);

export default Profile;
