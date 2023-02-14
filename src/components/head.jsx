import { getAdmin } from "../api/storage";
function Head(props){
  let adminDetails = getAdmin();
  
    return (<div className="row head">
    <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
     {/* <div className="overview ">{props.name}</div> */}
     </div>
    <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0 " align="right">
      <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
      
        <div className="mr-3 mt-1">
         {/* <div className="admin-name">{adminDetails.firstName} {adminDetails.lastName}<br/><div className="admintype">Superadmin</div></div>  */}
       </div>
       <div className="mr-3 mt-1" align="right">
        {/* <img className="adminimg" src={adminDetails.profilePicture} alt=''/> */}
      </div>
    </div>
  </div>
</div>)
    
}

export default Head;
