import { useNavigate } from 'react-router-dom';
import style from './SendMe.module.css';

export const SendMe = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/contacts');
  return (
    <div className={style.sendme}>
      <div onClick={goBack}>Написать мне</div>
    </div>
  );
};