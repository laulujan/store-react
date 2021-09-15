import './App.css';
import { Provider } from "react-redux";
import Router from './Router';
import store from './redux/store';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
