import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";
import moment from 'moment';
import { TransferProcessing } from "../../api/Auth";
import { GenAlert } from "../alert/alert";


const TransferTable = props => {
  const [loading, setLoading] = useState(false);
  const Requery = (process) => {
    const tripId = process.target.value;
    setLoading(tripId);
    TransferProcessing(tripId).then(result => {
      GenAlert(true, result.data.message);
      setTimeout(() =>
      window.location.reload()
      , 500);
    }).catch(error => {
      setLoading(false);
     GenAlert("Please try again later");
    })
  
  }
  const columns = [
    {
      name:'',
      cell: row=> (<div className="tableimgwrap"><img src={row.tripDetails.plannedBy.profilePicture} alt="" className="tableicon" /></div>),
  
      width: "50px",
    },
   {
      name: "Driver",
      cell: row=> row.tripDetails.plannedBy.firstName +' '+ row.tripDetails.plannedBy.lastName,
      sortable: true,
      grow: 6
    },
    {
      name: "Trip cost",
      cell: row=> row.tripDetails.cost ,
      sortable: true,
       grow: 3  
    },
    {
      name: "Booked seats",
      cell: row=> row.tripDetails.acceptedBookings ,
      sortable: true,
       grow: 3
    },
    {
      name: "PHONE",
      cell: row=> row.tripDetails.plannedBy.mobileNumber ,
      sortable: true,
      grow: 5
    },
    {
      name: "DATE",
      cell: row=> (<div><div className="date">{moment((row.createdTime)).format('MMM DD, YYYY')}</div></div>),
    
      sortable: true,
      grow: 4
    },
    {
      name: "STATUS",
      cell: row =>
      row.status=== 'failed'? (
       <div className="reject">Failed</div>
      ) : (<div className="approve">Sucessfull</div>),
      sortable: true,
    },
   
    {
      name: "ACTION",
      button: true,
      grow: 6,
      cell: row =>
      <button type="button" className="btn btn-primary   mgtoption"  disabled={loading} value={row.tripId} onClick={Requery} >
        {loading == row.tripId? 'Loading...' : 'Requery'}
      </button>
      
    }
  ];

  const [filterText, setFilterText] = React.useState("");
 
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );


  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      subHeader
    />
  );
};

export default TransferTable;
