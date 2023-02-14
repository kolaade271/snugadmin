import "./../modal.css"
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { GenAlert } from "../../alert/alert";
import { Fcm } from "../../../api/Auth";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    const notifyUserTitle = useFormInput('');
    const messageBody = useFormInput('');

    const HandleProcess = (process) => {
        process.preventDefault();

        const title = notifyUserTitle.value;
        setLoading(true);
        const to = process.target.value;
        const body = messageBody.value;
        alert(body)
        if (title !== "") {
            if (body != "") {
                Fcm(to, title, body).then(result => {
                    GenAlert(true, "Notification Sent !");
                    setTimeout(() =>
                        window.location.reload(), 500);
                    
                }).catch(error => {
                   // 
                    GenAlert(false, "Error Occur");
                    setLoading(false);
                })
            }
            else {
                GenAlert(false, "Message Required");
                setLoading(false);
            }
        }
        else {
            GenAlert(false, "Title Required");
            setLoading(false);
        }
    }



    return (
        <div className="">
            <ToastContainer />
            <div className="modal fade " id="notifyUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog superadmin-modal ">
                    <div className="modal-content">
                        <div className="btn-close" data-bs-dismiss="modal" >
                            <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
                        <div className="popinfo">
                            <div className="modal-title">Notify Users</div>
                            <div className="modal-body">
                                <div className="modal-text">Send a push notification to all beebzrides users</div>
                                <form>
                                    <div className="form-group">
                                        <label className="form-label input-label">Title</label>
                                        <input type="text" className="form-control"  {...notifyUserTitle} placeholder="Title" />

                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Enter Message</label>
                                        <textarea className="newnotify form-control"   {...messageBody} rows="3"></textarea>
                                    </div>
                                    <button className="btn  btnsubm shadow-none" onClick={HandleProcess} value="users" disabled={loading}>{loading ? 'Loading...' : 'Send Notification'}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade " id="notifyDriver" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog superadmin-modal ">
                    <div className="modal-content">
                        <div className="btn-close" data-bs-dismiss="modal" >
                            <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
                        <div className="popinfo">
                            <div className="modal-title">Notify Driver</div>
                            <div className="modal-body">
                                <div className="modal-text">Send a push notification to all beebzrides drivers</div>
                                <form>
                                    <div className="form-group">
                                        <label className="form-label input-label">Title</label>
                                        <input type="text" className="form-control"  {...notifyUserTitle} placeholder="Title" />

                                    </div>
                                    <div className="form-group">
                                        <label>Enter Message</label>
                                        <textarea className="newnotify form-control"  {...messageBody} rows="3"></textarea>
                                    </div>
                                    <button className="btn  btnsubm shadow-none" onClick={HandleProcess} value="drivers" disabled={loading}>{loading ? 'Loading...' : 'Send Notification'}</button>
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
export default Notify;

