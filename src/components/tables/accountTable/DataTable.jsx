import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import AccountFilter from "./accountFilter.jsx";
import moment from 'moment';

const Table = props => {
  const columns = [
  
    {
      name:'',
      cell: row=> (<div className="tableimgwrap"><img src={row.profilePicture} alt="" className="tableicon" /></div>),
      sortable: false,
      maxWidth: 400,
      minWidth: 120,
      width: 200,
      grow: 0.7
    },
    {
      name: "NAME",
      cell: row=> row.firstName +' '+ row.lastName,
      sortable: true,
      grow: 4
    },
    {
      name: "EMAIL",
      cell: row=> row.emailAddress ,
      sortable: true,
       grow: 4
    },
    {
      name: "PHONE",
      cell: row=> row.mobileNumber ,
      sortable: true,
      grow: 4
    },
    {
      name: "REG DATE",
      cell: row=> (<div><div className="date">{moment((row.joined)).format('MMM DD, YYYY')}</div></div>),
    
      sortable: true,
      grow: 3
    },
    // {
    //   name: "STATUS",
    //   cell: row =>
    //   row.id===4 ? (
    //    <div className="reject">Rejected</div>
    //   ) : row._id ===10 ||row.id === 8?(<div className="approve">Approved</div>) :(<div className="pending">Pending</div>),
    //   sortable: true,
    //   hide: "sm"
    // },
   
    // {
    //   name: "ACTION",
    //   button: true,
    //   cell: row =>
    //   <div className="dropdown">
    //   <button type="button" className="btn btn-primary dropdown-toggle accountoption" data-bs-toggle="dropdown">
    //     ACTION
    //   </button>
    //   <ul className="dropdown-menu">
    //   <li><a className="dropdown-item approve-button" href="#/">APPROVE</a></li>
    //     <li><a className="dropdown-item reject-button" href="#/">REJECT</a></li>
    //     <li><a className="dropdown-item block-button" href="#/">BLOCK</a></li>
    //   </ul>
      
    // </div>
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

export default Table;
