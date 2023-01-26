
import React from "react";
import axios from "axios";



export default function Results (props){
    const API_URL = props.url ;
    const [data, setData]= React.useState(null) ;

    React.useEffect(() => {
        axios.get(API_URL).then((response) => {
          setData(response.data);
          console.log(response.data);
          console.log('add')
        });
      }, []);

      let flag = null ;
    if (!data){
        flag = 'red';
    }else{
        flag = 'green';
    }

    return(
        <>
        <h1>Results</h1>
        <p>
        the flag is : {flag} this mean the nasa api block me to make api get method.
        to change this situation click in the search butto , you recive a json data of your search.
        </p>
        </>
    )
}