import React, { useState, useEffect } from "react";
import Head from "../components/head";
import "../components/tables/table.css";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import { GetTransfers } from "../api/Auth";
import { Logout } from "../api/storage";
import TransferTable from "../components/tables/TransferTable";
import TransferModal from "../components/modal/management/transfer-modal";

function Transfers() {

  const [transfers, setTransfers] = useState([]);
  const getTransfers = () => {
    const type = "failed";
    GetTransfers(type).then((response) => {
      const data= response.data.data;
      setTransfers(data);
    }).catch((error => {
      if (error.response.status === 401) {
        Logout();
        window.location.assign('/')
      }
    }))
  };
  useEffect(() => getTransfers(), []);


  const [driverModal, driverEvent] = useState([]);

  const driverHandler = driverData => driverEvent(driverData);
  return (
    <div className="management">
      <TopNav />
      <Leftnav />
      <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">

        <Head name="Transfers" />

        <div className="card mgt-card">
          <div className="tab-pane fade show active" id="Driver">
            <TransferTable data={transfers} click={driverHandler} />
          </div>

        </div>
        <TransferModal data={driverModal} />
      </main>


    </div>
  );
}

export default Transfers;
