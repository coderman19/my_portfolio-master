import { useNavigate } from 'react-router-dom';
import style from './Back.module.css';

export const Back = () => {

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <div className={style.back}>
      <button onClick={goBack}>На главную</button>
    </div>
  );
};