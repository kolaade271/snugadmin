import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import PrivateFilter from "./privateFilter";

const SharedTable = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<img src="https://i.ibb.co/4VgSPDq/head.png" className="table-img" alt="" />),
      sortable: true,
      width: "43px",
      
    },
    {
      name: "Driver",
      selector: "name",
      sortable: true,
      width:"150px",
    },
    {
        name: "Requester",
        cell:row=>("John Doe"),
        sortable: true,
      },
   
    {
      name: " Trip DATE",
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
      width:"105px",
    },
    {
      name: "Duration",
      cell: row =>("3hours"),
      sortable: true,
      width:"126px",
    },

    {
      name: "Location",
      cell: row =><div>Show map</div>,
      sortable: true,
      width:"126px",
    },
   
    {
      name: "Invoice",
      button: true,
      width:"59px",
      cell: row =><div>View</div>
     
      
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
      <PrivateFilter
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

export default SharedTable;
