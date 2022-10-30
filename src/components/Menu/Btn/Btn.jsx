import style from './Btn.module.css';
import { MyJob } from './MyJob/MyJob';
import { SendMe } from './SendMe/SendMe';

export const Btn = () => {
  return (
    <div className={style.btn}>
      <MyJob />
      <SendMe />
    </div>
  );
};