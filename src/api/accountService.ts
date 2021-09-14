import axios from "axios";
import { UserCredentials } from "../redux/types";

const signUpUser = async (user: UserCredentials) => {
  try {
    const result = await axios.post('http://localhost:5000/api/auth/',user);
    return result;
  }
  catch(error: any) {
    return error.response;
  }
};

const logInUser = async (user: UserCredentials) => {
  try {
    const result = await axios.post('http://localhost:5000/api/auth/login/',user);
    return result;
  }
  catch(error: any) {
    return error.response;
  }
};

const accountService = {
  signUpUser,
  logInUser,
};

export default accountService;