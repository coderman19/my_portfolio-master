
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { myContext } from './context/myContext';

// const colorText = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };



const root = ReactDOM.createRoot(document.getElementById('root'));
// const {Provider} = myContext;
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <myContext.Provider value="simple text">
        <App />
      </myContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

