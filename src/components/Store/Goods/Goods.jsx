import style from './Goods.module.css';

export const Goods = (props) => {
  return (
    <div className={style.goods}>
      <div>{props.id}</div>
      <h3>{props.title}</h3>
      <p>{props.cost}</p>
      
    </div>
  );
};