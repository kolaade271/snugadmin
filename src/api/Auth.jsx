import axios from 'axios';
import url from './url';
import { getToken } from "./storage";
const api = url.defaults.baseURL;
const key = url.defaults.APIKEY;
export const VerifyToken = () => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/auth/refresh",
    {
      refreshToken: token
    }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-API-KEY': `${key}`
    }
  }));
}

export const Login = (emailData, passwordData) => {
  return (axios.post(`${api}` + "/admin/auth/signin",
    {
      emailAddress: emailData,
      password: passwordData
    }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-API-KEY': `${key}`
    }
  }));

}

export const AdminDails = () => {
  const token = getToken();
  return (axios.get(`${api}` + "/admin", {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-API-KEY': `${key}`,
      'Authorization': `Bearer ${token}`
    }
  }));
}

export const LogoutAdmin = () => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/auth/signout", {
    refreshToken: getToken()
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const ChangePassword = (cpassword, npassword) => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/change-password", {
    "password": '' + cpassword + '',
    "newPassword": '' + npassword + ''
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const UploadProfile = (data) => {
  const token = getToken();
  return (axios.patch(`${api}` + "/admin", { "profilePicture": data }, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const UserDataList = (type) => {
  const token = getToken();
  return (axios.get(`${api}` + "/admin/users/" + type + "/0/0", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const Trips = (type) => {
  const token = getToken();
  return (axios.get(`${api}` + "/admin/trips/all/0/100", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const GetTransfers = (type) => {
  const token = getToken();
  return (axios.get(`${api}` + `/admin/transfers/${type}/0/100`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,
    }
  }));
}

export const DriverProcessing = (action, userId, note) => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/drivers/manager?action=" + action + "&userId=" + userId + "&rejectionMessage=" + note + "", {

  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}


export const TripProcessing = (action, tripId, note, amount, commission) => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/trips/manager?cost=" + amount + "&action=" + action + "&tripId=" + tripId + "&rejectionMessage=" + note + "&commissionRate=" + commission + "", {

  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const Reviews = (type) => {
  const token = getToken();
  return (axios.get(`${api}` + "/admin/trips/reviews/0/100", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}

export const Dashboard = (type) => {
  const token = getToken();
  return (axios.get(`${api}` + "/admin/dashboard", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}


export const  Fcm = (to, title, body)  => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/notify?to=" + to + "&title=" + title + "&body=" + body + "", {

  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-API-KEY': `${key}`,

    }
  }));
}



export const TransferProcessing = (tripId) => {
  const token = getToken();
  return (axios.post(`${api}` + "/admin/retry-transfer/{tripId}?tripId="+tripId+"", {
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
     'X-API-KEY': `${key}`,

    }
  }));
}