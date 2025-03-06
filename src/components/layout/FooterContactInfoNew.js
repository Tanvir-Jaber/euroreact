import axios from 'axios';
import { useEffect, useState } from 'react';

const FooterContactInfoNew = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {

    
    

    
    const fetchData = async () => {
      let url = `${process.env.REACT_APP_API_URI}/contactInfo`;
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);


  if (loading) return "";
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
      <div className="widget widget-contact clearfix">
        <h3 className="widget-title">Quick Contact!</h3>

        {data.length > 0 ? (
          data.map(item => (

            <ul key={item.id} className="widget_contact_wrapper" >
              <li>
                <i className="ttm-textcolor-skincolor flaticon-phone-call"></i>
                <h3>Call Us On:</h3> {item.phone}
              </li>
              <li>
                <i className="ttm-textcolor-skincolor flaticon-placeholder"></i>
                <h3>Address:</h3> {item.address}
              </li>
              <li>
                <i className="ttm-textcolor-skincolor flaticon-email"></i>
                <h3>Email:</h3>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </li>
            </ul>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default FooterContactInfoNew;
