import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import Popup from 'reactjs-popup';


const API_URL = "https://api.nasa.gov/planetary/apod?api_key=ZnHKAfZqY4YRJeYPBef9MGdeOTtkfYqr72C37WJS" ;



function Picoftheday(){
    const [data, setData]= React.useState(null) ;

    let Img =  () => (
      <Popup trigger={<img  src={data.url} alt={data.title} className='img-thumbnail img-fluid w-100 h-100' />} modal>
          <div class="card mb-3">
            <img height='800' width='500' src={data.url} className="card-img-top" alt="..."/>
          </div>
        </Popup>
      );

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
          <Img/>
        </div>

        <div className='col p-5'>
            <h1>{data.title}</h1>
            <div class="p-3 mb-2 bg-black text-white">
          Click on the image to see the image with more details
            </div>
            <br />
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