import style from './Header.module.css';
import { Nav } from './Nav/Nav';


export const Header = (props) => {
  return (
    <div className={style.header}>
      <Nav />
    </div>
  );
};