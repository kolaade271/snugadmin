import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import RefererFilter from "./refererFilter";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


function RefererTable(props) {
    const [payreport, setPayreport] = useState();
    const [username, setName] = useState();
    const getPayreport = (a) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const allPayreport = response.data;
                setPayreport(allPayreport);
                setName(a)
            })
        // alert(a);
    };

    const columns = [

        {
            name: "",
            cell: row => (<img src="https://i.ibb.co/4VgSPDq/head.png" className="table-img" alt="" />),
            sortable: true,
            width: "50px",

        },
        {
            name: "Driver",
            cell: row => ("John Doe"),
            sortable: true,
            width: "100px",

        }, {
            name: "trips",
            cell: row => ("24"),
            sortable: true,
            width: "100px",

        }, {
            name: "ACTION",
            button: true,
            cell: row =>
                <button type="button" className="btn btn-primary  mgtoption" onClick={() => getPayreport(row.name)} >
                    Details
                </button>

            // <button className="btn btn-success"  onClick={shoot}>Action</button>

        }
    ];

    const logcolumns = [
        {
            name: "",
            cell: row => (<img src="https://i.ibb.co/4VgSPDq/head.png" className="table-img" alt="" />),
            sortable: true,
            width: "50px",

        },

        {
            name: "Referred user",
            cell: row => ("Rob Merlin"),
            sortable: true,
            width: "140px",
        },
        {
            name: "phone",
            cell: row => ("(671) 555-0110"),
            sortable: false,
            width: "140px",
        },
        {
            name: "Email",
            cell: row => ("rob.merl@mail.com"),
            sortable: false,
            width: "140px",
        },
        {
            name: "Date",
            cell: row => ("24-06-2022"),
            sortable: true,
            hide: "sm",
            width: "120px",

        },
        {
            name: "Status",
            cell: row => ("3000"),
            sortable: true,
            width: "100px",
        },
        {
            name: "bonus",
            cell: row => ("$10"),
            sortable: true,
            width: "100px",
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

    var name = ""
    var logdata = ""
    if (payreport) {
        const paymentitem = payreport.filter(
            itemx =>
                JSON.stringify(itemx)
        );
        var logdata = <DataTable
            columns={logcolumns}
            data={paymentitem}
            defaultSortField="name"
            pagination
            className=""
        />
        var name = "for " + username
    }
    else {
        var logdata = <div className="report"> <FontAwesomeIcon icon={faArrowLeftLong} />  Click on the User’s name to view individual report</div>
    }


    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (

            <div className="row reporthead" >
                <div className="col-12 col-md-8">
                    <div className="headtitle">Referral Report</div>
                </div>
                <div className="col-12 col-md-2  " >
                    <RefererFilter
                        onFilter={e => setFilterText(e.target.value)}
                        onClear={handleClear}
                    />

                </div>
            </div>



        );
    }, [filterText, resetPaginationToggle]);




    return (
        <div className="row">
            <div className="">{subHeaderComponent}</div>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header reviewhead">All Referrers</div>
                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        defaultSortField="name"
                        pagination
                    /></div>
            </div>
            <div className="col-md-7 ">
                <div className="card">
                    <div className="card-header reviewhead3">
                        <div className="row">
                            <div className="col-md-8"><div className="reportheader"> Report  {name}</div></div>
                            <div className="col-md-4" align="right">
                                <button className="btn  btn-md center-block export"> <FontAwesomeIcon icon={faFileExport} /> Export</button>
                            </div>
                        </div>
                    </div>

                    {logdata}

                </div>
            </div>


        </div>
    );
};

export default RefererTable;
