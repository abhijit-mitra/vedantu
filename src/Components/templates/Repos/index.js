import React, { PureComponent } from 'react';
import {Input} from '../../atoms/';
import {Repo} from '../../molecules/';

class Repos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      repos:{
        isFetching:false,
        data:[]
      },
      query:'',
      search_result:[],
    };
  }

  componentDidMount = async ()=> {
    this.setState((state)=>({
      ...state,
      repos:{
        ...state.repos,
        isFetching: true
      }
    }))
    const res = await fetch('https://api.github.com/users/supreetsingh247/repos');
    const data = await res.json();
    this.setState((state)=>({
      ...state,
      repos:{
        ...state.repos,
        isFetching: false,
        data
      },
      search_result:data
    }))

  }

  handleChange = (e) =>{
    const {value} = e.target;
    const {repos:{data}} = this.state;
    if(value.length){
      const res = data.filter((elm)=>(
        (elm.name || '').toLowerCase().includes(value.toLowerCase()) ||
        ( elm.description || '').toLowerCase().includes(value.toLowerCase()) ||
        ( elm.language || '').toLowerCase().includes(value.toLowerCase())
      ));
      this.setState({query:value, search_result: res});
    }else{
      this.setState({query:value, search_result: data});
    }
  }

  render() {
    const {search_result} = this.state;
    return (
      <div className='repos'>
            <Input onChange={this.handleChange}/>
        <div className="repo-list">
          {search_result.map((elm)=>(
            <div className="row" key={elm.id}>
              <div className="col-md-12 col">
                <Repo data={elm}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Repos;
