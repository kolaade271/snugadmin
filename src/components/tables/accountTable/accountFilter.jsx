import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faFileExport } from '@fortawesome/free-solid-svg-icons'
import React from "react";


const AccountFilter = ({ filterText, onFilter, onClear }) => (
  <div className="row">
    <div className="col-12 col-md-7">
      <div className="row">
        <div className="col-12 col-md-3 tabiletitle">All Users</div>
        <div className="col-12 col-md-9">
          <div className="form-group table-search">
            <span className="form-control-feedback"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.3" stroke="#2B3674" stroke-width="1.4" />
              <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#2B3674" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            </span>
            <input type="text" className="form-control searchdata" placeholder="Search"  value={filterText}
              onChange={onFilter} />
              

          </div>
        </div>
      </div>


    </div>
    <div className="col-12 col-md-5 " >
      <div className="row ">
        <div className="col-md-12 " align="right">
        {/* <select  onChange={onFilter}  className="btn btn-md center-block filter dropdown-toggle " data-bs-toggle="dropdown">
  
  <option className="dropdown-item" value=""> <FontAwesomeIcon icon={faFilter} /> All Filter</option>
  <option className="dropdown-item" value="P">Status - pending</option>
  <option className="dropdown-item" value="10">Status - in-progress</option>
</select> */}

          {/* <button   onChange={onFilter} className="btn btn-md center-block filter dropdown-toggle " data-bs-toggle="dropdown" ><FontAwesomeIcon icon={faFilter} /> Filter</button>
          <ul className="dropdown-menu">
            <li value="111212121211" className="dropdown-item " >Status - success</li>
            <li><a className="dropdown-item"  href="#/">Status - in-progress</a></li>
            <li><a className="dropdown-item" href="#/">Status - failed</a></li>

          </ul> */}
          <button className="btn  btn-md center-block export"><FontAwesomeIcon icon={faFileExport} /> Export</button>
        </div>




      </div>
    </div>
  </div>




);

export default AccountFilter;
