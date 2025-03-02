import React from "react";
import Header from "./Header2";
import PageHeader from "./PageHeader";
import { Footer } from "./Footer";
import CompanyCareerForm from "./CompanyCareerForm";

const CompanyCareer = () => {
    return (
        <>
            <div className="site-main">
                <Header />

                <PageHeader title="Career" breadcrumb="Career" />

                <div className="col-lg-12 m-5">
                    
                    {/* section title end */}
                </div>

                <CompanyCareerForm />

                <Footer />
            </div>
        </>
    );
};

export default CompanyCareer;
