import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
    axios.get('https://images-api.nasa.gov/search?q='+this.state.value).then((response) =>{
      console.log(response.data);
    }) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}