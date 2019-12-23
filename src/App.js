import React, { PureComponent } from 'react';
import {LeftPanel, RightPanel} from './Components/organisms/';
import {Profile, Repos} from './Components/templates/';
import {table_data} from './data';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      profile:{
        isFetching:false,
        data:null
      }
    };
  }
  componentDidMount = async ()=> {
    this.setState((state)=>({
      ...state,
      profile:{
        ...state.profile,
        isFetching: true,
      }
    }));
    const res = await fetch('https://api.github.com/users/supreetsingh247');
    const data = await res.json();
    console.log(data);
    this.setState((state)=>({
      ...state,
      profile:{
        ...state.profile,
        isFetching: false,
        data
      }
    }));
  }
  render() {
    const {profile} = this.state;
    return (
      <div className='app p-30'>
        <div className="row">
          <LeftPanel>
            {Boolean(profile.data) && <Profile data={profile.data}/>}
          </LeftPanel>
          <RightPanel>
            <Repos/>
          </RightPanel>
        </div>
      </div>
    );
  }

}

export default App;
