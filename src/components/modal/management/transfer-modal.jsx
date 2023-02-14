import "./../modal.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverProcessing } from "../../../api/Auth"
import { GenAlert } from "../../alert/alert";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TransferModal(props) {
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
                <div className="driverdetail">Retry Failed Transfer</div>
                <button className="btn btn-danger ls" onClick={HandleProcess} data-bs-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}

export default TransferModal;

