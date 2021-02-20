import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {Provider} from "react-redux";
import {store} from "./stores/store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Main/>
          </div>
      </Provider>
  );
}

export default App;
