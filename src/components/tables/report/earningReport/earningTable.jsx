import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import EarningFilter from "./earningFilter";

const EarningTable = props => {
  const columns = [
   
    {
      name: "Driver",
      selector: "name",
      sortable: true,
      width:"160px",
    },
    {
        name: "Gateway",
        cell:row=>("Stripe"),
        sortable: false,
        width:"100px",
      },
    {
      name: "Date",
     cell:row=>("24-06-2022"),
      sortable: true,
      hide: "sm",
      width:"120px",
      
    },
    {
      name: "Amount",
      cell: row=> ("$350"),
      sortable: true,
      hide: "md",
      width: "110px",
    },
    {
      name: "Commission Type",
      cell: row => ("3000"),
      sortable: true,
      width:"150px",
    },
    {
        name: "earning",
        cell: row => ("$5.4"),
        sortable: true,
        width:"110px",
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
                <EarningFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
      
    );
  }, [filterText, resetPaginationToggle]);


  return (
    <div>
      <div className="card-header reviewhead2">{subHeaderComponent}</div>
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

export default EarningTable;
