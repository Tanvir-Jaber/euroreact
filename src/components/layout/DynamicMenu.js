import React, { useEffect,useState }  from 'react';
import axios from 'axios';

const DynamicMenu = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
  
      function performSignIn() {
        let headers = new Headers();
        let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Origin', 'http://localhost:3000');
  
        fetch(url, {
          mode: 'no-cors',
          credentials: 'include',
          method: 'GET',
          cache: 'no-cache',
          headers: headers
        })
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(error => console.log('Authorization failed: ' + error.message));
      }
      performSignIn()
            let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
            axios.get(url)
            .then(response => {
            setData(response.data);
            setLoading(false);      
            })
            .catch(err => {
            setError(err.message);  
            setLoading(false);
            });
  
  
    }, []);
    
    
      if (loading) {
        return <p></p>;
      }



    return (

        <>
        

       

        {data.length > 0 ? (
        data.map(item => (

        <li><a href={process.env.PUBLIC_URL + '/Services'}>{item.title}</a></li>

        ))
        ) : (
        <p></p>
        )}


        </>
    );
};

export default DynamicMenu;