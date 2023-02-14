import "./../modal.css"
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GenAlert } from "../../alert/alert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TripProcessing } from "../../../api/Auth";
import Moment from 'react-moment';
import moment from 'moment';
import {
  faUser, faPalette,
  faCalendarAlt,
  faMapLocation,
  faMapMarked,
  faLocation,
  faClock,
  faChair,
  faDollar,
  faPersonWalkingLuggage,
  faCarAlt
} from '@fortawesome/free-solid-svg-icons'

function TripModal(props) {
  const origin = props.data.origin;
  const pickups = props.data.pickups;
  const dropoffs = props.data.dropoffs;
  const luggages = props.data.luggages;
  const plannedBy = props.data.plannedBy;
  const destination = props.data.destination;
  const tripBookedDetails = props.data._id;
  const dateToFormat = new Date(props.data.date);
  const navigate = useNavigate();
  const ref = useRef(null);
  const costvalue = useFormInput('');
  const comissionvalue = useFormInput('');
  const HandleProcess = (process) => {
    process.preventDefault();
    const action = process.target.value;
    const tripId = process.target.getAttribute('tripId');
    const note = ref.current.value;
    let amount = costvalue.value;
    let commission = comissionvalue.value;
    if (action === "approve") {
      const note = "null";
      if (amount !== "") {
        if (commission != "") {
          TripProcessing(action, tripId, note, amount, commission).then(result => {
            GenAlert(true, result.data.message);
            setTimeout(() =>
              window.location.reload(), 500);
            
          }).catch(error => {
            // GenAlert(false, error.data.message);
            
          })
        }
        else {
          GenAlert(false, "Commission Required");
        }
      }
      else {
        GenAlert(false, "Amount Required");
      }
    }
    else if (action === "reject") {
      if (note !== "") {
        const amount = 1;
        const commission = 1;
        TripProcessing(action, tripId, note, amount, commission).then(result => {
          GenAlert(false, result.data.message);
          setTimeout(() =>
            window.location.reload()
            , 500);
        }).catch(error => {
          
          // GenAlert(false, error.data.message);
        })
      }
      else {

        GenAlert(false, "Notification Message Required");
      }

    }
  }
  return (
    <div className="">
      <div className="modal fade drivermodal" id="trip" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">

                <form className="row g-4 nth">
                  <div className="driverdetail">Trip Details</div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faUser} className="iconmail" /> &nbsp;&nbsp; Origin</label>

                    <textarea className="form-control input-view" rows="4" value={origin ? origin.name : 'null'} disabled></textarea>
                  </div>


                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faMapMarked} className="iconmail" />
                      &nbsp;&nbsp; Destination</label>
                    <textarea className="form-control input-view" rows="4" value={destination ? destination.name : 'null'} disabled></textarea>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faLocation} className="iconmail" />
                      &nbsp;&nbsp;Drop-off</label>

                    <textarea className="form-control input-view" rows="4" value={dropoffs ? dropoffs.map(data => (
                      " " + data.name
                    )) : 'null'} disabled></textarea>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faMapLocation} className="iconmail" />
                      &nbsp;&nbsp;Pick-up</label>

                    <textarea className="form-control input-view" rows="4" value={pickups ? pickups.map(data => (
                      " " + data.name
                    )) : 'null'} disabled></textarea>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPersonWalkingLuggage} className="iconmail" />
                      &nbsp;&nbsp;Luggage</label>

                    <textarea className="form-control input-view" rows="4" value={dropoffs ? dropoffs.map(data => (
                      " " + data.name
                    )) : 'null'} disabled></textarea>
                  </div>


                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPalette} className="iconmail" />
                      &nbsp;&nbsp;Vehicle Color</label>
                    <input type="text" className="form-control input-view" value={plannedBy ? plannedBy.driverDetails.vehiclePlateNumber : 'null'} disabled />
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faCarAlt} className="iconmail" />
                      &nbsp;&nbsp;Vehicle model</label>
                    <input type="text" className="form-control input-view" value={plannedBy ? plannedBy.driverDetails.vehicleModel : 'null'} disabled />

                  </div>








                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faClock} className="iconmail" />
                      &nbsp;&nbsp;Trip Date</label>
                    <input type="text" className="form-control input-view" value={moment(dateToFormat).format('YYYY-MM-DD')} disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faClock} className="iconmail" />
                      &nbsp;&nbsp;Trip Time</label>
                    <input type="text" className="form-control input-view" value={props.data.time} disabled />
                  </div>



                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faChair} className="iconmail" />
                      &nbsp;&nbsp; Available Seats</label>
                    <input type="text" className="form-control input-view" value={props.data.availableSeats} disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faChair} className="iconmail" />
                      &nbsp;&nbsp; Accepted Bookings</label>
                    <input type="text" className="form-control input-view" value={props.data.acceptedBookings} disabled />
                  </div>


                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faDollar} className="iconmail" />
                      &nbsp;&nbsp;Amount</label>
                    <input type="number" className="form-control" {...costvalue} placeholder="Cost" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faDollar} className="iconmail" />
                      &nbsp;&nbsp;Commission</label>
                    <input type="number" className="form-control" {...comissionvalue} placeholder="Commission" />
                  </div>

                  <div className="col-md-7">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faClock} className="iconmail" />
                      &nbsp;&nbsp;Notification</label>
                    <textarea className="form-control" rows="4" ref={ref}></textarea>
                  </div>


                  <div className="col-md-5"> <div className="row" align="center">
                    <div className="col-12">
                      <br />
                      {props.data.status === "pending" ? <div>
                        <button className="btn btn-success ls" onClick={HandleProcess} value="approve" tripId={tripBookedDetails ? tripBookedDetails : null}>Approve</button>
                        <button className="btn btn-warning ls" onClick={HandleProcess} value="reject" tripId={tripBookedDetails ? tripBookedDetails : null} >Reject</button>
                        <button className="btn btn-danger ls" onClick={HandleProcess} data-bs-dismiss="modal">Close</button>
                      </div> : <div>Trip already {props.data.status} </div>}
                    </div>
                  </div></div>


                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}


const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default TripModal;

