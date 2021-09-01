import jwt_decode from "jwt-decode";

const jwtDecode = (tokenString) => {
    return jwt_decode(tokenString);
};

const isSignedIn = () => {
    try {
        //const myJWT = 
        jwtDecode(localStorage.getItem("jwt"));
        // const isTokenActive = ( new Date( parseInt(myJWT.exp) * 1000 ) - new Date(Date.now()) ) > 0;
        // if (!isTokenActive) {
        //     localStorage.removeItem("jwt");
        // }
        return true;//isTokenActive;
    } catch {
        return false;
    }
};

const signOut = () => {
    localStorage.removeItem("jwt");
    //window.location.reload(); // creo q esto es mala practica pq refresca TODA la pag
    // debemos encontrar la forma de actualizar solo el boton de sign in/out
};

const JWTUtil = {
  jwtDecode,
  isSignedIn,
  signOut
};

export default JWTUtil;