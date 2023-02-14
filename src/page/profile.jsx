import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/footer";
import Head from "../components/head";
import Leftnav from '../components/lefnav';
import TopNav from '../components/topnav';
import { getAdmin, getToken ,SetAdminInfo} from "../api/storage";
import { ChangePassword, UploadProfile,AdminDails } from '../api/Auth';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {faCamera} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import LoadingBar from 'react-top-loading-bar'
import { GenAlert, PasswordAlert } from '../components/alert/alert';
import { Logout } from '../api/storage';

function Profile() {
    const navigate = useNavigate();
    let adminDetails = getAdmin();
    
    const cpassword = useFormInput('');
    const npassword = useFormInput('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    function IsChanged() {
        if (!cpassword.value || cpassword.value.length === 0) {
            PasswordAlert(false, "Cuurent Password Required");
            return false;
        }
        if (!npassword.value || npassword.value.length === 0) {
            PasswordAlert(false, "New Password Required");
            return false;
        }

        if (npassword.value.length < 8) {
            PasswordAlert(false, " Min 8 character Required");
            return false;
        }


    }

    const handleClick = () => {
        if (IsChanged() !== false) {
            setLoading(true);

            ChangePassword(cpassword.value, npassword.value).then(response => {
                setLoading(false);
                if (response.data.success === true) {
                    GenAlert(true, response.data.message);
                    npassword.value = "";
                    cpassword.value = "";
                }
                


            }).catch(error => {
                if (error.response.status === 400) {
                    GenAlert(false, error.response.data.message)
                }
                else if(error.response.status===401){
                    Logout();
                   window.location.assign('/')
                     }
                setLoading(false);


            })
        }



    };
    const ProcessFile = React.useRef(null);
    const handleUpload = event => {
        ProcessFile.current.click();
    };
    const handleUploadChange = event => {
        const fileUploaded = event.target.files[0];
        if (fileUploaded.size > 95120)
            GenAlert(false, "File size cannot exceed more than 5MB");
        else UploadProfile(fileUploaded).then(response => {
            setProgress(progress + 40)
            AdminDails().then(update=>{
                setProgress(progress + 100)
                GenAlert(true,response.data.message)
                let adminD = update.data.data;
                setTimeout(()=>
                navigate("/profile"),200);
                SetAdminInfo(adminD)
                
            }).catch(error=>(
                GenAlert(false,error.data.message)
            ))
        });
    };
    return (
        <>
        <LoadingBar color="#1735f5" progress={progress} onLoaderFinished={() => setProgress(0)} />
            <TopNav />
            <Leftnav />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
                <Head name="Profile" />
                <ToastContainer />
                <div className="card profile-card">
                    <div className=" card profile-cover">
                        <div className="profile-name">{adminDetails.firstName} {adminDetails.lastName}</div>
                        <div className="profile-role">Super Admin</div>
                        <div className='mg'>
                            <img src={adminDetails.profilePicture} className="profile-img" alt="" />

                            <div className="middle">
                           
                                <button onClick={handleUpload}> <FontAwesomeIcon icon={faCamera} /></button>
                                <div className="upload"><input type="file" className='upload-icon' onChange={handleUploadChange} ref={ProcessFile} accept="image/*" /></div>
                            </div>

                        </div>
                    </div>
                    <div className="row profile-form">
                        <div className="col-12 col-md-7">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>First Nmae </label>
                                        <input type="email" className="form-control profileinput" disabled placeholder={adminDetails.firstName} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder={adminDetails.lastName} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder={adminDetails.mobileNumber} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Email </label>
                                        <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder={adminDetails.emailAddress} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="Male" disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Join Date</label>
                                        <input type="text" className="form-control profileinput" aria-describedby="emailHelp" placeholder={adminDetails.joined} disabled />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="row">
                                <div className="col-md-8 col-12">
                                    <div className="form-group">
                                        <label>Current Password</label>
                                        <input type="password" className="form-control chpw " {...cpassword} placeholder="Current Password" />
                                    </div>
                                </div>

                                <div className="col-md-8 col-12">
                                    <div className="form-group">
                                        <label>New Password </label>
                                        <input type="password" className="form-control chpw " {...npassword} placeholder="New Password" />
                                    </div>
                                </div>

                                <div className="col-md-8 col-12">
                                    <button className="btn  btn-password" onClick={handleClick} disabled={loading}>{loading ? 'Loading...' : 'Save Password'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
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

export default Profile;
