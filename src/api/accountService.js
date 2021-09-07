import axios from "axios";

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