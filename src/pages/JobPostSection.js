import axios from 'axios';
import { useEffect, useState } from 'react';

const JobPostSection = () => {

    
    const [JobPostdata, setJobPostdata] = useState([]);
    console.log(JobPostdata)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
   
       
        function performSJobPost() {
          let headers = new Headers();
          let url = `${process.env.REACT_APP_API_URI}/JobPost`;
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
        //   headers.append('Origin', 'http://localhost:3000');
    
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
        performSJobPost()
        let url = `${process.env.REACT_APP_API_URI}/JobPost`;
        axios.get(url).then(response => {    
          
          setJobPostdata(response.data);   
          setLoading(false);      
        })
        .catch(err => {
          setError(err.message);  
          setLoading(false);
        });
  
  
      }, []);
  
  
  
      if (loading) {
        return "";
      }

    return (
        <>
           <div className="row">

           {JobPostdata.length > 0 ? (
            JobPostdata.map(item => (

           <div className="col-lg-12 col-md-12">

                <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                    <div className="featured-thumbnail">
                    <img src={`${process.env.REACT_APP_ASSET_URL}/${item.company_logo}`} alt={item.title}/>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>{item.title}</a></h3>
                        </div>
                        <div className="featured-desc">
                            <p>{item.category}</p>
                             <p><strong>LastDate: </strong> <span>{item.closing_at}</span></p>
                        </div>
                        <div className="featured-bottom">
                            <div className="job-meta">
                                <span><i className="fa fa-map-marker-alt"></i>{item.location}</span>
                                <span><i className="fa fa-filter"></i>{item.company_name}</span>
                                <span><i className="fa fa-envelope"></i> {item.Email}</span>
                            </div>
                            <div className="job-time">
                                <span className="green">{item.shift}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            ))
            ) : (
            <p></p>
            )}


      

            {/* <div className="col-lg-12">
                <div className="job-pagination-block">
                    <a className="page-nav-link">prev</a>
                    <a className="page-nav-link current">1</a>
                    <a className="page-nav-link" href="#">2</a>
                    <a className="page-nav-link" href="#">3</a>
                    <a className="page-nav-link" href="#">....</a>
                    <a className="page-nav-link">next</a>
                </div>
            </div> */}
            </div>
        </>
    );
};

export default JobPostSection;