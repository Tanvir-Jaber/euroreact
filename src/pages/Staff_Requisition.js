import React from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import { Footer } from "../components/layout/Footer";
import Staff_Requisition_Form from "./Staff_Requisition_Form";

const Staff_Requisition = () => {
  return (
    <>
      <div className="site-main">
        <Header />

        <PageHeader title="Staff Requisition" breadcrumb="Staff Requisition" />

        <div className="col-lg-12 m-3">
          {/* section title */}
          <div className="section-title title-style-left_text" >
            <div className="title-header pt-5">
              <h3 className="pt-3">
                <span className="text-theme-SkinColor">Staff Requisition</span>{" "}
                Form
              </h3>
              <h2 className="title">Looking for Workers?</h2> <br/>
              <p>
                Please tell us how we can help you. Only fields marked with *
                are required. Your information is protected by our privacy
                policy. Please take into consideration the following before
                completing the Staff Requisition Form below: Work Supply –
                Trabalho Temporário Lda does not search for, provide or accept
                any responsibilities with regard to accommodation and
                transportation to and from the work location/s for posted
                workers. However, this does not necessarily mean that
                accommodation and transportation must be provided free of charge
                by the client.
              </p>
            </div>
          </div>
          {/* section title end */}
        </div>

        <Staff_Requisition_Form />

        <Footer />
      </div>
    </>
  );
};

export default Staff_Requisition;
