import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUser } from '@fortawesome/free-solid-svg-icons'

function AddAdmin() {
  return (
    <div className="">
      <div className="modal fade " id="superAdmin" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog superadmin-modal ">
          <div className="modal-content">
            <div className="btn-close" data-bs-dismiss="modal" >
              <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
            <div className="popinfo">
              <div className="modal-title">Add Super Admin</div>
              <div className="modal-body">
                <div className="modal-text">Enter the email of the new super Administrator</div>
                <form>
                  <div className="form-group">
                    <label> <FontAwesomeIcon icon={faUser} className="iconmail" />Email address</label>
                    <input type="email" className="form-control newadmin" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <button className="btn  btnsubm shadow-none">Add Super Admin</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="modal fade " id="addAdmim" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog superadmin-modal ">
          <div className="modal-content">
            <div className="btn-close" data-bs-dismiss="modal" >
              <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
            <div className="popinfo">
              <div className="modal-title">Add New Admin</div>
              <div className="modal-body">
                <div className="modal-text">Enter the email of the new  Administrator</div>
                <form>
                  <div className="form-group">
                    <label> <FontAwesomeIcon icon={faUser} className="iconmail" />Email address</label>
                    <input type="email" className="form-control newadmin" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <button className="btn  btnsubm shadow-none">Add  Admin</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}





export default AddAdmin;

