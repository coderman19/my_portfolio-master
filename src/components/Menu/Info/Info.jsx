import style from './Info.module.css';

export const Info = () => {
  return (
    <div className={style.info}>
      <h3 className={style.infoTitle}>Павел Пономарев</h3>
      <p className={style.infoName}>фронтенд разработчик</p>
    </div>
  );
};