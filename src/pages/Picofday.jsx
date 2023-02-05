import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=ZnHKAfZqY4YRJeYPBef9MGdeOTtkfYqr72C37WJS" ;

function Picoftheday(){
    const [data, setData]= React.useState(null) ;

    React.useEffect(() => {
        axios.get(API_URL).then((response) => {
          setData(response.data);
        });
      }, []);

    if (!data) return null;

    return(
    <div className='container text-center p-5 box w-100 h-100'>
      <div className='row'>
        
        <div className="col-20 col-lg-5 ">
          <img  src={data.url} alt={data.title} className='img-thumbnail img-fluid w-100 h-100' />
        </div>

        <div className='col p-5'>
            <h1>{data.title}</h1>
            <p>{data.explanation}</p>
            <div className="alert alert-dark" role="alert">
            {data.date}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Picoftheday;