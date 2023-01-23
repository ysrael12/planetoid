import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../index.css'


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
    console.log(`https://images-api.nasa.gov/search?q=${search}`);   
  }
   

  render() {
    this.props = this.state.value; 
    console.log(this.props)
    return (
    <div class="card grid text-center gap-3 search" >
      <form action={`https://images.nasa.gov/search-results?q=${this.props}&page=1&media=image,video,audio&yearStart=1920&yearEnd=2023`} method='GET' onSubmit={this.handleSubmit}>
        <div >
          <div class="p-2 g-col-6">
            <input type="text" class="form-control" placeholder="Search" ></input>
          </div>
          <div class="p-2 g-col-6">
            <input type="submit" class="btn btn-dark" value='search'></input>
          </div>
        </div>
      </form>
    </div>
      
    );
  }
}