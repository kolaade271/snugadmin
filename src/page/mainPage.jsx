import { React, useState ,useEffect} from "react";
import LineChart from './chart/uptrend';
import { UserData } from './chart/Data';
import Head from "../components/head";
import Footer from "../components/footer";
import Fab from "../components/fab/fab";
import AddAdmin from "../components/modal/dashboard/addAdmin";
import Notify from "../components/modal/dashboard/notify";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import { Dashboard } from "../api/Auth";
import { Logout } from "../api/storage";
import '../css/main.css';
import moment from 'moment'; 
import timezone from 'moment-timezone'

function Mainpage() {


 
  return (
    <>

      <TopNav />

      <Leftnav />

      <div className="container-fluid">
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-5">
          <div className="dash">
          <Head name="Dashboard"  />
          </div>

          <div className="container-fluid">

            {/* <div className="row my-4">
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M27.6737 26.6398C24.5674 25.8325 23.5685 24.9978 23.5685 23.6978C23.5685 22.2062 24.9506 21.1662 27.2632 21.1662C29.2063 21.1662 30.1779 21.9052 30.5336 23.082C30.6978 23.6294 31.1494 24.0399 31.7241 24.0399H32.1347C33.0378 24.0399 33.681 23.1504 33.3662 22.302C32.7915 20.6873 31.4505 19.3463 29.3158 18.8263V17.8821C29.3158 16.7463 28.3989 15.8295 27.2632 15.8295C26.1274 15.8295 25.2106 16.7463 25.2106 17.8821V18.7852C22.5559 19.3599 20.4211 21.0841 20.4211 23.7252C20.4211 26.8862 23.0348 28.4598 26.8526 29.3767C30.2736 30.1977 30.9578 31.4019 30.9578 32.6745C30.9578 33.6187 30.2873 35.1239 27.2632 35.1239C25.0053 35.1239 23.8421 34.3166 23.3906 33.1671C23.1853 32.6335 22.7201 32.2503 22.159 32.2503H21.7759C20.859 32.2503 20.2159 33.1808 20.558 34.0292C21.338 35.9313 23.1579 37.0534 25.2106 37.4913V38.4081C25.2106 39.5439 26.1274 40.4607 27.2632 40.4607C28.3989 40.4607 29.3158 39.5439 29.3158 38.4081V37.5187C31.9841 37.0123 34.1052 35.466 34.1052 32.6608C34.1052 28.7746 30.78 27.4472 27.6737 26.6398Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Current Balance</div>
                        <div className="card-main">$642.39</div></div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M20.2842 24.3136H20.5579C21.6115 24.3136 22.4736 25.1757 22.4736 26.2293V35.8082C22.4736 36.8618 21.6115 37.7239 20.5579 37.7239H20.2842C19.2305 37.7239 18.3684 36.8618 18.3684 35.8082V26.2293C18.3684 25.1757 19.2305 24.3136 20.2842 24.3136ZM27.9472 18.5663C29.0009 18.5663 29.863 19.4284 29.863 20.482V35.8082C29.863 36.8618 29.0009 37.7239 27.9472 37.7239C26.8936 37.7239 26.0315 36.8618 26.0315 35.8082V20.482C26.0315 19.4284 26.8936 18.5663 27.9472 18.5663ZM35.6103 29.5135C36.664 29.5135 37.526 30.3756 37.526 31.4293V35.8082C37.526 36.8618 36.664 37.7239 35.6103 37.7239C34.5566 37.7239 33.6945 36.8618 33.6945 35.8082V31.4293C33.6945 30.3756 34.5566 29.5135 35.6103 29.5135Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Earning</div>
                        <div className="card-main">$33,512.2</div></div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M20.2842 24.3136H20.5579C21.6115 24.3136 22.4736 25.1757 22.4736 26.2293V35.8082C22.4736 36.8618 21.6115 37.7239 20.5579 37.7239H20.2842C19.2305 37.7239 18.3684 36.8618 18.3684 35.8082V26.2293C18.3684 25.1757 19.2305 24.3136 20.2842 24.3136ZM27.9472 18.5663C29.0009 18.5663 29.863 19.4284 29.863 20.482V35.8082C29.863 36.8618 29.0009 37.7239 27.9472 37.7239C26.8936 37.7239 26.0315 36.8618 26.0315 35.8082V20.482C26.0315 19.4284 26.8936 18.5663 27.9472 18.5663ZM35.6103 29.5135C36.664 29.5135 37.526 30.3756 37.526 31.4293V35.8082C37.526 36.8618 36.664 37.7239 35.6103 37.7239C34.5566 37.7239 33.6945 36.8618 33.6945 35.8082V31.4293C33.6945 30.3756 34.5566 29.5135 35.6103 29.5135Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Valued Transacted</div>
                        <div className="card-main">$338,275</div></div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="col-12 col-md-6 col-lg-3 ">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="card-elemx">Sales</div>
                    <div className="card-mainx">$574.34</div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row my-4">

              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M39.6666 20.0434L26.3549 33.3667L21.4083 28.42L23.0533 26.775L26.3549 30.0767L38.0216 18.41L39.6666 20.0434ZM27.9999 37.3334C22.8549 37.3334 18.6666 33.145 18.6666 28C18.6666 22.855 22.8549 18.6667 27.9999 18.6667C29.8316 18.6667 31.5466 19.2034 32.9933 20.125L34.6849 18.4334C32.7833 17.115 30.4849 16.3334 27.9999 16.3334C21.5599 16.3334 16.3333 21.56 16.3333 28C16.3333 34.44 21.5599 39.6667 27.9999 39.6667C30.0183 39.6667 31.9199 39.1534 33.5766 38.2434L31.8266 36.4934C30.6599 37.03 29.3649 37.3334 27.9999 37.3334ZM36.1666 31.5H32.6666V33.8334H36.1666V37.3334H38.4999V33.8334H41.9999V31.5H38.4999V28H36.1666V31.5Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Total Users</div>
                        {/* <div className="card-main">{statistics? statistics.usersCount:0}</div> */}
                        </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M31.2498 16.0834H19.3332C18.1415 16.0834 17.1665 17.0584 17.1665 18.25V32.3334C17.1665 32.9292 17.654 33.4167 18.2498 33.4167C18.8457 33.4167 19.3332 32.9292 19.3332 32.3334V19.3334C19.3332 18.7375 19.8207 18.25 20.4165 18.25H31.2498C31.8457 18.25 32.3332 17.7625 32.3332 17.1667C32.3332 16.5709 31.8457 16.0834 31.2498 16.0834ZM31.889 21.0559L37.1215 26.2884C37.5223 26.6892 37.7498 27.2417 37.7498 27.8159V37.75C37.7498 38.9417 36.7748 39.9167 35.5832 39.9167H23.6557C22.464 39.9167 21.4998 38.9417 21.4998 37.75L21.5107 22.5834C21.5107 21.3917 22.4748 20.4167 23.6665 20.4167H30.3507C30.9248 20.4167 31.4773 20.6442 31.889 21.0559ZM31.2498 28H36.1248L30.1665 22.0417V26.9167C30.1665 27.5125 30.654 28 31.2498 28Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Registered Drivers</div>
                        {/* <div className="card-main">{statistics?statistics.driversCount:null}</div> */}
                        </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M31.2498 16.0834H19.3332C18.1415 16.0834 17.1665 17.0584 17.1665 18.25V32.3334C17.1665 32.9292 17.654 33.4167 18.2498 33.4167C18.8457 33.4167 19.3332 32.9292 19.3332 32.3334V19.3334C19.3332 18.7375 19.8207 18.25 20.4165 18.25H31.2498C31.8457 18.25 32.3332 17.7625 32.3332 17.1667C32.3332 16.5709 31.8457 16.0834 31.2498 16.0834ZM31.889 21.0559L37.1215 26.2884C37.5223 26.6892 37.7498 27.2417 37.7498 27.8159V37.75C37.7498 38.9417 36.7748 39.9167 35.5832 39.9167H23.6557C22.464 39.9167 21.4998 38.9417 21.4998 37.75L21.5107 22.5834C21.5107 21.3917 22.4748 20.4167 23.6665 20.4167H30.3507C30.9248 20.4167 31.4773 20.6442 31.889 21.0559ZM31.2498 28H36.1248L30.1665 22.0417V26.9167C30.1665 27.5125 30.654 28 31.2498 28Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Publish Trip</div>
                        {/* <div className="card-main">{statistics?statistics.tripsCount:null}</div> */}
                        </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card card-label">

                  <div className="card-body">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center mt-3 mt-md-0">
                      <div className="mr-3 mt-1"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#241571" />
                        <path d="M31.2498 16.0834H19.3332C18.1415 16.0834 17.1665 17.0584 17.1665 18.25V32.3334C17.1665 32.9292 17.654 33.4167 18.2498 33.4167C18.8457 33.4167 19.3332 32.9292 19.3332 32.3334V19.3334C19.3332 18.7375 19.8207 18.25 20.4165 18.25H31.2498C31.8457 18.25 32.3332 17.7625 32.3332 17.1667C32.3332 16.5709 31.8457 16.0834 31.2498 16.0834ZM31.889 21.0559L37.1215 26.2884C37.5223 26.6892 37.7498 27.2417 37.7498 27.8159V37.75C37.7498 38.9417 36.7748 39.9167 35.5832 39.9167H23.6557C22.464 39.9167 21.4998 38.9417 21.4998 37.75L21.5107 22.5834C21.5107 21.3917 22.4748 20.4167 23.6665 20.4167H30.3507C30.9248 20.4167 31.4773 20.6442 31.889 21.0559ZM31.2498 28H36.1248L30.1665 22.0417V26.9167C30.1665 27.5125 30.654 28 31.2498 28Z" fill="white" />
                      </svg>
                      </div>
                      <div className="mr-3 mt-1"><div className="card-elem">Pending Approvals</div>
                        {/* <div className="card-main">{statistics?statistics.pendingTripsCount:null}</div> */}
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-12 col-md-12 col-lg-12 mb-4 mb-lg-0"><div className="card data-card">
                <div className="">
                  <div className="d-flex justify-content-end">
                    <div className="mr-auto p-">Recent Unapproved Trips</div>
                    <div className="p-2">View All</div>
                  </div>
                  <div className="table-responsive">

                    <table className="table table-borderless">
                      <thead className="dashboard-table">
                        <tr>
                          <th >NAME</th>
                          <th>ORIGIN</th>
                          <th>DESTINATION</th>
                          <th>AVAILABLE SEAT</th>
                          <th>DATE</th>
                          <th>TIME</th>
                        </tr>
                      </thead>

                      {/* <tbody className="dashboard-table-body">
                        
                          {recentPendingTrips?recentPendingTrips.map(data => (
                              <tr>
                              <td>{data.plannedBy.firstName+" "+data.plannedBy.lastName}</td>
                              <td>{data.origin.name}</td>
                              <td>{data.destination.name}</td>
                              <td>{data.availableSeats}</td>
                              <td>{moment((data.date)).format('MMM DD, YYYY')}</td>
                              
                              <td>{data.time}</td>
                            </tr>

                          )):null}
                         

                      </tbody> */}
                    </table>
                  </div>


                </div>
              </div></div>

            </div>


            <div className="row my-4">
              {/* <div className="col-12 col-md-6 col-lg-12 mb-4 mb-lg-0">

                <div className="card chart-card">
                  <div className="card-title chart-title">User Uptrend</div>
                  <LineChart chartData={userData} />
                </div></div> */}
              {/* <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="card data-card">
                  <div className="top-rate-dashbord">Top Rated Drivers</div>
                  <div className="table-responsive">

                    <table className="table table-borderless">
                      <thead className="dashboard-table-rate">
                        <tr>
                          <th></th>
                          <th >Name</th>
                          <th>Trips</th>
                          <th>Rating</th>
                        </tr>
                      </thead>

                      <tbody className="dashboard-table-body-rt">
                        <tr>
                          <td>img</td>
                          <td>Adeniran Joshua</td>
                          <td>10</td>
                          <td>5 (6 of 10)</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>Adeniran Joshua</td>
                          <td>10</td>
                          <td>5 (6 of 10)</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>Adeniran Joshua</td>
                          <td>10</td>
                          <td>5 (6 of 10)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <AddAdmin />
          <Notify />
          <Fab />
          <Footer />


        </main>
      </div>
    </>

  );
}


const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
      setValue(e.target.value);
  }
  return {
      value,
      onChange: handleChange
  }
}
export default Mainpage;
