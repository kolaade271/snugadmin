import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import PaymentFilter from "./paymentFilter";

const PaymentTable = props => {
  const columns = [
   
    {
      name: "Transaction",
      selector: "name",
      sortable: true,
      width:"140px",
    },
    {
        name: "type",
        cell:row=>("Stripe"),
        sortable: false,
        width:"80px",
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
      width: "120px",
    },
    {
      name: "Status",
      cell: row => ("3000"),
      sortable: true,
      width:"100px",
    },
    {
        name: "commision",
        cell: row => ("20%"),
        sortable: true,
        width:"110px",
      }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
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
                <PaymentFilter
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

export default PaymentTable;
