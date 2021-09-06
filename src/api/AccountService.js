import axios from "axios";
//import Redirector from "../security/Redirector";
//import Config from "../security/Config";

// const login = (username, password, history, serverErrorHandler) => {
//   return axios
//     .post(process.env.REACT_APP_API_URL + "/auth/sign-in/", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         localStorage.setItem("jwt", response.headers["authorization"]);
//         Redirector.redirectFromLogin(history);
//       }
//     })
//     .catch((error) => {
//       serverErrorHandler();
//     });
// };

// const mmm = async (donor) => {
//   const result = await  axios.post (process.env.REACT_APP_API_URL + '/auth/sign-up-donor', donor, {
//       headers: {
//           "Content-Type": "application/json",
//           ...Config.httpAuthRequestHeaders
//       }
//   });
//   return result.data;
// }

const signUpUser = async (user) => {
  try {
    const result = await axios.post('http://localhost:5000/api/auth/',user);
    return result;
  }
  catch(error) {
    return error.response;
  }
};

const logInUser = async (user) => {
  try {
    const result = await axios.post('http://localhost:5000/api/auth/login/',user);
    return result;
  }
  catch(error) {
    return error.response;
  }
};

const accountService = {
  signUpUser,
  logInUser
};

export default accountService;