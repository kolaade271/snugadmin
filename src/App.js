import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/login";
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
import DriverlogReport from './page/driverwalletReport';
import { PrivateRoute, PublicRoute, } from './api/Routing';
import Transfers from './page/transfers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/mainPage" element={<Mainpage />} />
          <Route path="/management" element={<Manangement /> } />
          <Route path="/account" element={<UserAccount /> } />
          <Route path="/review" element={<Review /> } />
          <Route path="/profile" element={<Profile /> } />
          <Route path="/earning" element={<EarnReport /> } />
          <Route path="/paymentreport" element={<PaymentReport />} />
          <Route path="/refererreport" element={<RefererReport />} />
          <Route path="/driverwallet" element={<DriverwalletReport />} />
          <Route path="/driverlog" element={<DriverlogReport />} />
          <Route path="/transfers" element={<Transfers />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}
export default App
