import { useNavigate } from 'react-router-dom';
import style from './MyJob.module.css';

export const MyJob = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/about'); 
  return (
    <div className={style.myjob}>
      <div onClick={goBack}>Мои работы</div>
    </div>
  );
};