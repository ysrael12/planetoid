import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../index.css'
import axios from 'axios';


export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {value : ' '};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({value : event.target.value});
  }

  handleSubmit(event){
    let search = this.state.value;
  }

  render()
  {
   // this.props = this.state.value; 
   let search = this.state.value;
    return (
    <div className="card grid text-center mb-3 gap-3 search" >
      <form  onChange={this.handleChange}  onSubmit={this.handleSubmit}>
        <div >
          <div className="p-2 g-col-6">
            <input type="text" className="form-control" placeholder="Search" ></input>
          </div>
          <div className="p-2 g-col-6">
            <a className="btn btn-dark" type='submit' href={`https://images-api.nasa.gov/search?q=${search}`}> search </a>
          </div>
        </div>
      </form>
    </div>  
    );
  }
}

