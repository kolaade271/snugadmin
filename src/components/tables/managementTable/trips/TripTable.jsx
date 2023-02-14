import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import TripFilter from "./tripFilter";
import moment from 'moment';

const TripTable = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<div className="tableimgwrap"><img src={row.plannedBy.profilePicture} alt="" className="tableicon" /></div>),
      sortable: true,
      width: "50px",
      
    }, 
    {
      name: "PUBLISHER",
      cell: row=><div> {row.plannedBy.firstName +' '+ row.plannedBy.lastName}<br/>{row.plannedAs}</div>,
      sortable: true,
      grow: 2
    },
    { 
      name: "DATE",
      cell: row=> (<div><div className="">{moment((row.date)).format('MMM DD, YYYY')}</div><br></br><div className="time">{row.time}</div></div>),
      sortable: true,
      grow: 2
    },
    { 
      name: "AVAILABLE SEAT",
      cell: row=> (<div>({row.availableSeats?row.availableSeats:0} - {row.acceptedBookings?row.acceptedBookings:0})</div>),
      sortable: true,
      grow: 2
    },
    {
      name: "STATUS",
      cell: row =>
      row.id===4 ? (
       <div className="reject">Rejected</div>
      ) :  row.status === 'rejected'?(<div className="reject">{row.status}</div>) :  row.status === 'approved'?(<div className="approve">{row.status}</div>)  :  row.status === 'accepted'?(<div className="approve">{row.status}</div>) : row.status === 'completed'?(<div className="approve">{row.status}</div>) :(<div className="pending">{row.status}</div>),
      sortable: true,
      grow: 2
    },
    // {
    //   name: "LOCATION",
    //   cell: row =>
    //   row.id===4 ? (
    //    <div className="reject">Rejected</div>
    //   ) : row.status === 'approved'?(<div className="approve">Approved</div>) :(<div className="pending">Pending</div>),
    //   sortable: true,
    //   grow: 2
    // },
   
    {
      name: "ACTION",
      button: true,
      cell: row =>
      <button type="button" className="btn btn-primary  mgtoption"data-bs-toggle="modal" data-bs-target="#trip" onClick={() => props.click(row)} >
        View Details
      </button>
      
    // <button className="btn btn-success"  onClick={() => props.click(row.name)}>Action</button>
          
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems =props.data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <TripFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
    );
  }, [filterText, resetPaginationToggle]);


  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default TripTable;
