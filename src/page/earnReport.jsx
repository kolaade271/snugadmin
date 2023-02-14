import React, { useState, useEffect } from "react";
import Head from "../components/head";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import axios from "axios";
import Footer from "../components/footer";
import EarningTable from "../components/tables/report/earningReport/earningTable";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EarnReport() {
    const [allreview, setTable] = useState([]);
    const getTable = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const reviewtable = response.data;
                setTable(reviewtable);
            })
    };
    useEffect(() => getTable(), []);



    return (
        <>
            <TopNav />
            <Leftnav />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
                <Head name="Reports" />
                <div className="container-fluid">
                    <div className="arrowback"> <FontAwesomeIcon icon={faArrowLeftLong} />  Back to Reports</div>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="card">
                                <EarningTable data={allreview} click={"x"} />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card earning ">
                                <div className="report-icon2" align="center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.28393 6.3137H2.55761C3.61128 6.3137 4.47337 7.17579 4.47337 8.22946V17.8083C4.47337 18.862 3.61128 19.724 2.55761 19.724H2.28393C1.23026 19.724 0.368164 18.862 0.368164 17.8083V8.22946C0.368164 7.17579 1.23026 6.3137 2.28393 6.3137ZM9.94698 0.566406C11.0007 0.566406 11.8627 1.4285 11.8627 2.48217V17.8083C11.8627 18.862 11.0007 19.724 9.94698 19.724C8.89331 19.724 8.03122 18.862 8.03122 17.8083V2.48217C8.03122 1.4285 8.89331 0.566406 9.94698 0.566406ZM17.61 11.5136C18.6637 11.5136 19.5258 12.3757 19.5258 13.4294V17.8083C19.5258 18.862 18.6637 19.724 17.61 19.724C16.5564 19.724 15.6943 18.862 15.6943 17.8083V13.4294C15.6943 12.3757 16.5564 11.5136 17.61 11.5136Z" fill="#241571" />
                                    </svg>
                                </div>
                                <div align="center" className="earntitle">Total Earnings</div>
                                <div align="center" className="earnamt">$33,512.2</div>
                                <div align="center" className="earntitle">Pending</div>
                                <div align="center" className="earnamt">$512.2</div>
                                <hr className="hrreport" />
                                <div align="center" className="updatenote">Update approximately every 5 minutes</div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </main>
        </>
    );
}

export default EarnReport;
