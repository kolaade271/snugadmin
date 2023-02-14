import '../css/signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession,  SetAdminInfo} from '../api/storage';
import { AdminDails, Login } from '../api/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenAlert } from '../components/alert/alert';

function SignUp() {
  const navigate = useNavigate();
  const email = useFormInput('');
  const password = useFormInput('');
  const [loading, setLoading] = useState(false);
  function Islogin() {
    const isEmailValid = /@/.test(email.value);
    if (!isEmailValid) {
      GenAlert(false, "Email Required");
      return false;
    }
    if (!password.value || password.value.length === 0) {
      GenAlert(false, "Password Required");
      return false;
    }

  }

  const handleLogin = () => {
    if (Islogin() !== false) {
      setLoading(true);
     
          let emailData = email.value;
          let passwordData = password.value;
       Login(emailData,passwordData).then(response => {
        const data = response.data.data;
        const token = data.refreshToken;
        setUserSession(token);
        if (response.data.success === true) {
          AdminDails().then(results => {
            if (results.data.success === true) {
              let adminD = results.data.data;
              GenAlert(true, "🦄 Authenticated!");
              SetAdminInfo(adminD);
              
              setLoading(false);
              navigate(`/mainPage`);
            }
            else {
              GenAlert(false, "Try Again Later");
            }
          });

        }
        else {
          GenAlert(false, "Try Again");
        }

      }).catch(error => {
        GenAlert(false, "Invalid Credentials");
        setLoading(false);
      });
    }
  }

  return (
    <div className="body">
      <ToastContainer />
      <div className="container">

        <div className="row iaf ">
          <div className="col-lg-6">
            <div className='info'>
              <div className='logo'>Logo</div>
              <div className='note'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <div className="authcard card ">
              <div className='sh'>Sign In</div>
              <div className='note-2'>Enter your email and password to sign in!</div>
              <div className='signup-form'>
                <div className="mb-3">

                  <label className="form-label">Email*</label>
                  <input type="email" className="form-control" {...email} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password*</label>
                  <input type="password" className="form-control" {...password} placeholder="Min. 8 characters" />
                </div>
                <div className='row sec2'>
                  <div className='col-lg-6'>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        Keep me logged in
                      </label>
                    </div>
                  </div>
                  <div className='col-lg-6 fg' align='right'>Forget password?</div>
                </div>
                <button className='btn btn-success submit' onClick={handleLogin} disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
export default SignUp;
