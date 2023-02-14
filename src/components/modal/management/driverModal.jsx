import "./../modal.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverProcessing } from "../../../api/Auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GenAlert } from "../../alert/alert";
import moment from 'moment';
import {
  faUser, faPeopleGroup,
  faIdCard, faCar, faPalette,
  faMobile,
  faCalendarAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DriverModal(props) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const HandleProcess = (process) => {
    process.preventDefault();
    const action = process.target.value;
    const userId = process.target.getAttribute('userid');
    const note = "nill";
    if (action === "approve") {
      DriverProcessing(action, userId, note).then(result => {
        GenAlert(true, result.data.message);
        setTimeout(() =>
          navigate("/management"), 500);
      }).catch(error => {
        
        GenAlert(false, error.data.message);
      })
    }
    else if (action === "reject") {
      const note = ref.current.value;
      if (note !== "") {
        DriverProcessing(action, userId, note).then(result => {
          GenAlert(false, result.data.message);
          setTimeout(() =>

            window.location.reload(), 500);
        }).catch(error => {
          GenAlert(false, error.data.message);
        })
      }
      else {
        GenAlert(false, "Notification Message Required");
      }

    }

    
  }
  const moreDetails = props.data.driverDetails;
  return (
    <div className="">
      <ToastContainer />
      <div className="modal fade " id="driver" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg drivermodal">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">

                <form className="row g-4 nth">
                  <div className="driverdetail">Driver Details</div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faUser} className="iconmail" /> &nbsp;&nbsp; Legal Last Name</label>
                    <input type="text" className="form-control input-view" value={props.data.lastName} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faUser} className="iconmail" />
                      &nbsp;&nbsp;Legal First Name</label>
                    <input type="text" className="form-control input-view" value={props.data.firstName} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faIdCard} className="iconmail" />
                      &nbsp;&nbsp; Date of Birth</label>
                    <input type="text" className="form-control input-view" value={moment((props.data.dateOfBirth)).format('MMM DD, YYYY')} disabled />
                  </div>


                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPeopleGroup} className="iconmail" />
                      &nbsp;&nbsp;Social Security Number</label>
                    <input type="text" className="form-control input-view" value={props.data.ssn ? props.data.ssn : 'null'} disabled />
                  </div>


                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faIdCard} className="iconmail" />
                      &nbsp;&nbsp;Vehicle Plate Number</label>
                    <input type="text" className="form-control input-view" value={moreDetails ? moreDetails.vehiclePlateNumber : 'null'} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faCar} className="iconmail" />
                      &nbsp;&nbsp;Vehicle Name</label>
                    <input type="text" className="form-control input-view" value={moreDetails ? moreDetails.vehicleModel : 'null'} disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPalette} className="iconmail" />
                      &nbsp;&nbsp; Vehicle Color</label>
                    <input type="text" className="form-control input-view" value={moreDetails ? moreDetails.vehicleColor : 'null'} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faMobile} className="iconmail" />
                      &nbsp;&nbsp;Phone Number</label>
                    <input type="text" className="form-control input-view" value={props.data.mobileNumber} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faCalendarAlt} className="iconmail" />
                      &nbsp;&nbsp;Vehicle Year</label>
                    <input type="text" className="form-control input-view" value={moreDetails ? moreDetails.vehicleYear : 'null'} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faIdCard} className="iconmail" />
                      &nbsp;&nbsp; Address</label>
                    <textarea className="form-control" rows="4" value={props.data.address + "  " + props.data.city + "  " + props.data.state} disabled></textarea>
                  </div>

                  <div className="col-md-7">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faClock} className="iconmail" />
                      &nbsp;&nbsp;Notification</label>
                    <textarea className="form-control" rows="4" ref={ref}></textarea>
                  </div>
                  <div className="">
                    <div >
                      <div align="center">
                        <button className="btn btn-success ls" onClick={HandleProcess} value="approve" userid={props.data._id}>Approve</button>
                        <button className="btn btn-warning ls" onClick={HandleProcess} value="reject" userid={props.data._id} >Reject</button>
                        <button className="btn btn-danger ls" onClick={HandleProcess} data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}




export default DriverModal;

