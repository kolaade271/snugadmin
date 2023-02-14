import React, { useState, useEffect } from "react";
import Head from "../components/head";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import Footer from "../components/footer";
import ReviewTable from "../components/tables/review/reviewTable";
import { Reviews } from "../api/Auth";

function Report() {
  const [allreview, setTable] = useState([]);
  const getTable = () => {
    Reviews().then((response) => {
        const reviewtable = response.data.data;
        
        setTable(reviewtable);
      })
  };
  useEffect(() => getTable(), []);


  return (
    <>
     <TopNav/>
       
       <Leftnav/>
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="Reviews & Rating" />
      <div className="container-fluid">
        {/* <div className="card card-body cardref">
          <div className="revhead">Top 4 Drivers</div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="card topcard">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://i.ibb.co/4VgSPDq/head.png" className="refimg" alt="" />
                      <div className="badge">Driver</div>
                    </div>
                    <div className="col-9">
                      <div className="rev">
                        <div className="revstar">4 (45)</div>
                        <div className="revstar">Concluded Trips: 13</div>
                        <div className="revstar rateamt">$750</div>
                      </div>
                      <div className="rev">
                        <div className="revstar">3h20mins</div>
                      </div>
                    </div>
                    <div className="revname">Charles Darwin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12">
              <div className="card topcard">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://i.ibb.co/4VgSPDq/head.png" className="refimg" alt="" />
                      <div className="badge">Driver</div>
                    </div>
                    <div className="col-9">
                      <div className="rev">
                        <div className="revstar">4 (45)</div>
                        <div className="revstar">Concluded Trips: 13</div>
                        <div className="revstar">$750</div>
                      </div>
                      <div className="rev">
                        <div className="revstar" align="right">3h20mins</div>
                      </div>
                    </div>
                    <div className="revname">Charles Darwin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12">
              <div className="card topcard">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://i.ibb.co/4VgSPDq/head.png" className="refimg" alt="" />
                      <div className="badge">Driver</div>
                    </div>
                    <div className="col-9">
                      <div className="rev">
                        <div className="revstar">4 (45)</div>
                        <div className="revstar">Concluded Trips: 13</div>
                        <div className="revstar">$750</div>
                      </div>
                      <div className="rev">
                        <div className="revstar" align="right">3h20mins</div>
                      </div>
                    </div>
                    <div className="revname">Charles Darwin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12">
              <div className="card topcard">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://i.ibb.co/4VgSPDq/head.png" className="refimg" alt="" />
                      <div className="badge">Driver</div>
                    </div>
                    <div className="col-9">
                      <div className="rev">
                        <div className="revstar">4 (45)</div>
                        <div className="revstar">Concluded Trips: 13</div>
                        <div className="revstar">$750</div>
                      </div>
                      <div className="rev">
                        <div className="revstar" align="right">3h20mins</div>
                      </div>
                    </div>
                    <div className="revname">Charles Darwin</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> */}
        <br></br>
        <div className="card">

          <ReviewTable data={allreview} click={"a"} className="trips" />
        </div>






      </div>




      <Footer />
    </main>
    </>
  );
}

export default Report;
