import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

function SharedModal(props) {
  return (
    <div className="">
      <div className="modal fade drivermodal" id="trip" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">

                <form className="row g-4 nth">
                  <div className="driverdetail"></div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faUser} className="iconmail" /> &nbsp;&nbsp; Origin</label>
                    <input type="text" className="form-control input-view" value={props.data.name} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faMapLocation} className="iconmail" />
                      &nbsp;&nbsp;Pick-up</label>
                    <input type="text" className="form-control input-view" value={props.data.name} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faCalendarAlt} className="iconmail" />
                      &nbsp;&nbsp;Trip Dater</label>
                    <input type="text" className="form-control input-view" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faMapMarked} className="iconmail" />
                      &nbsp;&nbsp; Destination</label>
                    <input type="text" className="form-control input-view" value={props.data.name} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faLocation} className="iconmail" />
                      &nbsp;&nbsp;Drop-off</label>
                    <input type="text" className="form-control input-view" value={props.data.name} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faClock} className="iconmail" />
                      &nbsp;&nbsp;Trip Time</label>
                    <input type="text" className="form-control input-view" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faChair} className="iconmail" />
                      &nbsp;&nbsp; Available Seats</label>
                    <input type="text" className="form-control input-view" value={props.data.name} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faDollar} className="iconmail" />
                      &nbsp;&nbsp;Fair estimate</label>
                    <input type="text" className="form-control input-view" value={props.data.phone} disabled />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPersonWalkingLuggage} className="iconmail" />
                      &nbsp;&nbsp;Luggage</label>
                    <input type="text" className="form-control input-view" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faCarAlt} className="iconmail" />
                      &nbsp;&nbsp;Vehicle model</label>
                    <input type="text" className="form-control input-view" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label input-label">
                      <FontAwesomeIcon icon={faPalette} className="iconmail" />
                      &nbsp;&nbsp;Vehicle Color</label>
                    <input type="text" className="form-control input-view" disabled />
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button className="btn btn-success ls">Approve</button>
                      <button className="btn btn-warning ls">Reject</button>
                      <button className="btn btn-danger ls">Cancel</button>
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

export default SharedModal;

