import './css/main.css';
import Leftnav from './components/lefnav';
import TopNav from './components/topnav';
// import Head from './component/head';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mainpage from './page/mainPage';
import Manangement from './page/management';
import UserAccount from './page/account';
import Report from './page/report';
import Profile from './page/profile';
import Review from './page/review';
import EarnReport from './page/earnReport';
import PaymentReport from './page/paymentReport';
import RefererReport from './page/refererReport';
import DriverwalletReport from './page/driverlogReport';
function Dashboard() {
  return (
    <div className="App">
       <TopNav/>
      <div className="container-fluid">
      
      <Leftnav/>

      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/> } />
      <Route path="/management" element={<Manangement/> } />
      <Route path="/account" element={<UserAccount/> } />
      <Route path="/reports" element={<Report/> } />
      <Route path="/review" element={<Review/> } />
      <Route path="/profile" element={<Profile/> } />
      <Route path="/earning" element={<EarnReport/> } />
      <Route path="/paymentreport" element={<PaymentReport/> } />
      <Route path="/refererreport" element={<RefererReport/> } />
      <Route path="/driverwallet" element={<DriverwalletReport/> } />

    </Routes>
    </BrowserRouter>
      </div>
      

      </div>
    
    
    
  );
}
export default Dashboard
