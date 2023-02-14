import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import ReviewFilter from "./reviewFilter";

const ReviewTable = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<img src="https://i.ibb.co/4VgSPDq/head.png" className="table-img" alt="" />),
      sortable: true,
      width: "50px",
      
    },
    {
      name: "PUBLISHER",
      selector: "name",
      sortable: true,
      width:"160px",
    },
    {
        name: "RIDE TYPE",
        cell:row=>("Shared"),
        sortable: true,
        width:"120px",
      },
    {
      name: "EMAIL",
      selector: "email",
      sortable: true,
      hide: "sm",
      width:"130px",
      
    },
    {
      name: "PHONE",
      selector: "phone",
      sortable: true,
      width:"120px",
    },
    {
      name: "DATE",
      cell: row=> (<div><div className="date">June 12, 2022</div><br></br><div className="time">06:30 AM</div></div>),
      sortable: true,
      hide: "md",
      width: "150px",
    },
    {
      name: "STATUS",
      cell: row =>
      row.id===4 ? (
       <div className="reject">Rejected</div>
      ) : row.id ===10 ||row.id === 8?(<div className="approve">Approved</div>) :(<div className="pending">Pending</div>),
      sortable: true,
      width:"150px",
    },
   
    {
      name: "ACTION",
      button: true,
      width:"80px",
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
          <div className="card-header red">
         <div className="d-flex justify-content-end">
                <div className="mr-auto p-2">Tops Reviews</div>
                <div className="p-2">
                <ReviewFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
                </div>
              </div>
         </div>
      
    );
  }, [filterText, resetPaginationToggle]);


 
};

export default ReviewTable;
