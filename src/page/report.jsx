import Head from "../components/head";

import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import Footer from "../components/footer";




function Report() {
  return (
    <>  <TopNav/>
    <Leftnav/>    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="Reports" />
      <div className="container-fluid">

        <div className="card report-card">

          <div class="row my-4">
            <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="card report-option">
                <div className="report-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z" fill="white" />
                  </svg>

                </div>
                <div className="report-title">Earning Report</div>
                <div className="report-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  nostrud amet.</div>
                <a href="/earning" className="btn  report-btn">View Report</a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="card report-option">
                <div className="report-icon">
                  <div className="svg-icon">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 16V9H5V16H3ZM9 16V9H11V16H9ZM0 20V18H20V20H0ZM15 16V9H17V16H15ZM0 7V5L10 0L20 5V7H0Z" fill="white" />
                    </svg>

                  </div>

                </div>
                <div className="report-title">Payment Report</div>
                <div className="report-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  nostrud amet.</div>
                <a href="/paymentreport" className="btn  report-btn" >View Report</a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="card report-option">
                <div className="report-icon">
                  <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16V13.2C0 12.6333 0.146 12.1123 0.438 11.637C0.729333 11.1623 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64567 4.75 9.387C5.81667 9.129 6.9 9 8 9C9.1 9 10.1833 9.129 11.25 9.387C12.3167 9.64567 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2707 11.1623 15.562 11.637C15.854 12.1123 16 12.6333 16 13.2V16H0ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM12.5 7.95C12.9833 7.41667 13.3543 6.80833 13.613 6.125C13.871 5.44167 14 4.73333 14 4C14 3.26667 13.871 2.55833 13.613 1.875C13.3543 1.19167 12.9833 0.583334 12.5 0.0500002C13.5 0.183334 14.3333 0.625 15 1.375C15.6667 2.125 16 3 16 4C16 5 15.6667 5.875 15 6.625C14.3333 7.375 13.5 7.81667 12.5 7.95ZM18 16V13C18 12.4 17.8667 11.8293 17.6 11.288C17.3333 10.746 16.9833 10.2667 16.55 9.85C17.4 10.15 18.1877 10.5373 18.913 11.012C19.6377 11.4873 20 12.15 20 13V16H18ZM20 9V7H18V5H20V3H22V5H24V7H22V9H20Z" fill="white" />
                  </svg>

                </div>
                <div className="report-title">Referral Report</div>
                <div className="report-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  nostrud amet.</div>
                <a href="/refererreport" className="btn  report-btn" >View Report</a>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="card report-option">
                <div className="report-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10.5C13.4333 10.5 13.7917 10.3583 14.075 10.075C14.3583 9.79167 14.5 9.43333 14.5 9C14.5 8.56667 14.3583 8.20833 14.075 7.925C13.7917 7.64167 13.4333 7.5 13 7.5C12.5667 7.5 12.2083 7.64167 11.925 7.925C11.6417 8.20833 11.5 8.56667 11.5 9C11.5 9.43333 11.6417 9.79167 11.925 10.075C12.2083 10.3583 12.5667 10.5 13 10.5ZM10 14C9.45 14 8.97933 13.8043 8.588 13.413C8.196 13.021 8 12.55 8 12V6C8 5.45 8.196 4.979 8.588 4.587C8.97933 4.19567 9.45 4 10 4H17C17.55 4 18.021 4.19567 18.413 4.587C18.8043 4.979 19 5.45 19 6V12C19 12.55 18.8043 13.021 18.413 13.413C18.021 13.8043 17.55 14 17 14H10ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2H10C8.81667 2 7.85433 2.37067 7.113 3.112C6.371 3.854 6 4.81667 6 6V12C6 13.1833 6.371 14.1457 7.113 14.887C7.85433 15.629 8.81667 16 10 16H18C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2Z" fill="white" />
                  </svg>

                </div>
                <div className="report-title">Driver wallet Report</div>
                <div className="report-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  nostrud amet.</div>
                  <a href="/driverwallet" className="btn  report-btn" >View Report</a>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="card report-option">
                <div className="report-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8C6.5 8 4.375 7.60833 2.625 6.825C0.875 6.04167 0 5.1 0 4C0 2.9 0.875 1.95833 2.625 1.175C4.375 0.391667 6.5 0 9 0C11.5 0 13.625 0.391667 15.375 1.175C17.125 1.95833 18 2.9 18 4C18 5.1 17.125 6.04167 15.375 6.825C13.625 7.60833 11.5 8 9 8ZM9 13C6.5 13 4.375 12.6083 2.625 11.825C0.875 11.0417 0 10.1 0 9V6.5C0 7.23333 0.341667 7.85433 1.025 8.363C1.70833 8.871 2.525 9.28333 3.475 9.6C4.425 9.91667 5.41267 10.1457 6.438 10.287C7.46267 10.429 8.31667 10.5 9 10.5C9.68333 10.5 10.5373 10.429 11.562 10.287C12.5873 10.1457 13.575 9.91667 14.525 9.6C15.475 9.28333 16.2917 8.871 16.975 8.363C17.6583 7.85433 18 7.23333 18 6.5V9C18 10.1 17.125 11.0417 15.375 11.825C13.625 12.6083 11.5 13 9 13ZM9 18C6.5 18 4.375 17.6083 2.625 16.825C0.875 16.0417 0 15.1 0 14V11.5C0 12.2333 0.341667 12.8543 1.025 13.363C1.70833 13.871 2.525 14.2833 3.475 14.6C4.425 14.9167 5.41267 15.146 6.438 15.288C7.46267 15.4293 8.31667 15.5 9 15.5C9.68333 15.5 10.5373 15.4293 11.562 15.288C12.5873 15.146 13.575 14.9167 14.525 14.6C15.475 14.2833 16.2917 13.871 16.975 13.363C17.6583 12.8543 18 12.2333 18 11.5V14C18 15.1 17.125 16.0417 15.375 16.825C13.625 17.6083 11.5 18 9 18Z" fill="white" />
                  </svg>

                </div>
                <div className="report-title">Driver Log</div>
                <div className="report-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  nostrud amet.</div>
                <a href="/driverlog" className="btn  report-btn" >View Report</a>
              </div>
            </div>

          </div>
        </div>




      </div>




      <Footer />
    </main>
    </>
  );
}

export default Report;
