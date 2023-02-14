import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function DriverDocModal(props) {
  const moreDetails = props.data.driverDetails;
  return (
    <div className="">
      <div className="modal fade " id="driverdoc" tabindex="-1" aria-hidden="true">

        <div className="modal-dialog  modal-fullscreen drivermodal">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">

                <div className="row g-4 nth">
                  <div className="row">
                    <div className="col-md-6"><div className="driverdetail">Driver Documents</div></div>
                    <div className="col-md-6 right"><div className="driverdetail" align="right">
                      <FontAwesomeIcon icon={faClose} className="" data-bs-dismiss="modal" /></div></div>
                  </div>

                  <div className="d-flex navtabitem align-items-start">
                    <div className="nav flex-column nav-pills doctab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button className="nav-link active  btn btn-primary btn-lg btn-block fxm" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</button>
                      <button className="nav-link  btn btn-primary btn-lg btn-block fxm" id="v-pills-licence-tab" data-bs-toggle="pill" data-bs-target="#licence" type="button" role="tab" aria-controls="v-pills-licence" aria-selected="false">Licence</button>
                      <button className="nav-link  btn btn-primary btn-lg btn-block fxm" id="v-pills-insurance-tab" data-bs-toggle="pill" data-bs-target="#insurance" type="button" role="tab" aria-controls="v-pills-insurance" aria-selected="false">Insurance</button>
                      <button className="nav-link  btn btn-primary btn-lg btn-block fxm" id="v-pills-sticker-tab" data-bs-toggle="pill" data-bs-target="#sticker" type="button" role="tab" aria-controls="v-pills-sticker" aria-selected="false">Sticker</button>
                      <button className="nav-link  btn btn-primary btn-lg btn-block fxm" id="v-pills-vimage-tab" data-bs-toggle="pill" data-bs-target="#vimage" type="button" role="tab" aria-controls="v-pills-vimage" aria-selected="false">Vichcle Image</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="row">
                          {moreDetails ? <img src={props.data.profilePicture} className="dataimg" /> : 'null'}

                        </div>

                      </div>
                      <div className="tab-pane fade show active" id="licence" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="row">
                          {moreDetails ?
                            moreDetails.driverLicense.map(data => (
                              <div className="col-md-4">
                                <img src={data} className="dataimg" />
                              </div>



                            )) : <div className="col-md-4">No Data </div>}

                        </div>
                      </div>
                      <div className="tab-pane fade" id="vimage" role="tabpanel" aria-labelledby="v-pills-vimage-tab">
                        <div className="row">
                          {moreDetails ?
                            moreDetails.vehicleImages.map(data => (
                              <div className="col-md-4">
                                <img src={data} className="dataimg" />
                              </div>

                            )) : <div className="col-md-4">No Data </div>}

                        </div>
                      </div>
                      <div className="tab-pane fade" id="insurance" role="tabpanel" aria-labelledby="v-pills-insurance-tab">
                        <div className="row">
                          {moreDetails ?
                            moreDetails.vehicleInsurance.map(data => (
                              <div className="col-md-4">
                                <img src={data} className="dataimg" />
                              </div>

                            )) : 'null'}

                        </div>
                      </div>
                      <div className="tab-pane fade" id="sticker" role="tabpanel" aria-labelledby="v-pills-sticker-tab">
                        <div className="row">
                          {moreDetails ? <img src={moreDetails.vehicleBlueSticker} className="dataimg" /> : 'null'}

                        </div>

                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}





export default DriverDocModal;

