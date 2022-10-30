import { Back } from '../../Back/Back';
import Posts from '../../Articles/Posts';
import style from './Aboutpage.module.css';


export const Aboutpage = () => {
 
  return (
    <>
     <div className="container">
     <div className={style.aboutpage}>
        <Posts />
        <Back />
      </div>
     </div>
    </> 
  );
};