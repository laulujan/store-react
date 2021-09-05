import './App.css';
import { Provider } from "react-redux";
import Router from './Router';
import { setToken } from "./redux/user/reducer";
import store from "./redux/store";

function App() {
  const token = window.localStorage.getItem("user-token");
  if (token) store.dispatch(setToken(token));
  return (
    <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
