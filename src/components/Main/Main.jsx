import style from './Main.module.css';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from '../Pages/Homepage/Homepage';
// import { Notfoundpage } from '../Pages/Notfoundpage/Notfoundpage';
// import { Notfoundpage } from '../Pages/Notfoundpage/Notfoundpage';



export const Main = (props) => {
 
  return (
    <div className={style.main}>
      <Routes>
        <Route path="/" element={<Homepage />}/>
      
      </Routes>
    </div>
  );
};

