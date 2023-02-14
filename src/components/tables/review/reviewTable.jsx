import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import ReviewFilter from "./reviewFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../table.css";

const ReviewTable = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<div className="tableimgwrap"><img src={row.user.profilePicture} alt="" className="tableicon" /></div>),
      sortable: true,
      width: "60px",
   
    },
    { 
      name: "Driver",
      cell: row=> (<div className="">{row.user.firstName+" "+row.user.lastName}</div>),
      selector: true,
    },

    {
      name: "Origin",
      cell: row=> (<div className="">{row.tripDetails.origin.name?row.tripDetails.origin.name:null}</div>),
      sortable: true,
      
    },
    {
      name: "Destination",
      cell: row=> (<div className="">{row.tripDetails.destination.name?row.tripDetails.destination.name:null}</div>),
      sortable: true,
      
    },
    
    {
      name: "Cost",
      cell: row=> (<div className="">{row.tripDetails.cost?row.tripDetails.cost:null}</div>),
     
      sortable: true,
      hide: "md",
      width: "130px",
    },
    {
      name: "Overall Rating",
      cell: row=> (<div className="">{row.starRating}    <FontAwesomeIcon icon={faStar} className="stars"/></div>),
      sortable: true,
    },
   
    // {
    //   name: "ACTION",
    //   button: true,
    //   width:"80px",
    //   cell: row =>
    //   <button type="button" className="btn btn-primary  mgtoption" >
    //     See Reviews
    //   </button>
      
    // // <button className="btn btn-success"  onClick={() => props.click(row.name)}>Action</button>
          
    // }
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
                <ReviewFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
      
    );
  }, [filterText, resetPaginationToggle]);


  return (
    <div>
      <div className="card-header reviewhead">{subHeaderComponent}</div>
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      paginationRowsPerPage={[5,  25, 30]} 
    />
    </div>
  );
};

export default ReviewTable;
