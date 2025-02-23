import axios from 'axios';
import { useEffect, useState } from 'react';


const CategorySection = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    function performSignIn() {
      let headers = new Headers();
      let url = `${process.env.REACT_APP_API_URI}/categories`;
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


    const fetchData = async () => {
      let url = `${process.env.REACT_APP_API_URI}/categories`;
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
    <>
      <section className="ttm-row features-section clearfix">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-12">
              {/* section title */}
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h3>
                    Get{" "}
                    <span className="text-theme-SkinColor">Appropriate</span>
                  </h3>
                  <h2 className="title">Search Job By Category</h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>
          {/* row end */}
          {/* row */}
          <div className="row row-equal-height mb_10">

            {data.length > 0 ? (
              data.map(item => (

                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                      {/* finance-hover */}
                      <div className="ttm-col-bgimage-yes ttm-bg h-100">
                        <div
                          className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                          style={{
                            backgroundImage:
                              "url('assets/images/about/about-2.jpg')",
                          }}
                        ></div>
                        <div className="layer-content"></div>
                      </div>
                      {/* finance-hover end */}
                    </div>

                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                        <i className={`fa ${item.icon} fa-3x`} aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Our company provides specific services within the building
                          construction industry & others sector, you might want to
                          tailor job titles based on those particular categories.
                        </p>
                      </div>
                      <a
                        className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark"
                        href={process.env.PUBLIC_URL + "/job_list"}
                      >
                        Apply Jobs!
                      </a>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                </div>

              ))
            ) : (
              <p></p>
            )}



          </div>
          {/* row end */}
        </div>
      </section>
    </>
  );
};

export default CategorySection;
