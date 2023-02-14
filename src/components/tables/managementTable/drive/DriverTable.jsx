import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import AccountFilter from "./driverFilter";
import moment from 'moment';

const DriverTable = props => {
  const columns = [
    {
      name:'',
      cell: row=> (<div className="tableimgwrap"><img src={row.profilePicture} alt="" className="tableicon" /></div>),
  
      width: "50px",
    },
   {
      name: "NAME",
      cell: row=> row.firstName +' '+ row.lastName,
      sortable: true,
      grow: 6
    },
    {
      name: "EMAIL",
      cell: row=> row.emailAddress ,
      sortable: true,
       grow: 6
    },
    {
      name: "PHONE",
      cell: row=> row.mobileNumber ,
      sortable: true,
      grow: 5
    },
    {
      name: "REG DATE",
      cell: row=> (<div><div className="date">{moment((row.joined)).format('MMM DD, YYYY')}</div></div>),
    
      sortable: true,
      grow: 4
    },
    {
      name: "STATUS",
      cell: row =>
      row.id===4 ? (
       <div className="reject">Rejected</div>
      ) : row.driverDetails.status  ==='approved'?(<div className="approve">Approved</div>): row.driverDetails.status  ==='rejected'?(<div className="rejected">Rejected</div>) :(<div className="pending">Pending</div>),
      sortable: true,
    },
    {
      name: "DOCUMENTS",
      button: true,
      cell: row =>
      <div type="button" className=" " data-bs-toggle="modal" data-bs-target="#driverdoc" onClick={() => props.click(row)} >
        View Doc
      </div>
     
    },
   
    {
      name: "ACTION",
      button: true,
      cell: row =>
      <button type="button" className="btn btn-primary  mgtoption"data-bs-toggle="modal" data-bs-target="#driver" onClick={() => props.click(row)} >
        View Details
      </button>
     
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
      <AccountFilter
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

export default DriverTable;
