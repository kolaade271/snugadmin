import React, { useState, useEffect } from "react";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import Table from "../components/tables/accountTable/DataTable";
import "../components/tables/table.css";
import axios from "axios";
import { UserDataList } from "../api/Auth";

import Head from "../components/head";

function UserAccount() {
  const [data, setTable] = useState([]);
  const getTable = () => {
    const type = "all";
    UserDataList(type).then((response) => {
        const myTable = response.data.data;
        setTable(myTable);
      })
  };
  useEffect(() => getTable(), []);

  return (
    <div className="management">
    <TopNav/>
  <Leftnav/>
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="User Account" />
      <div className="account-table card">
        <Table data={data}  />
      </div>
    </main>
    </div>
  );
}

export default UserAccount;
