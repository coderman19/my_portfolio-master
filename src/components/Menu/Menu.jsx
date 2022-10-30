import style from './Menu.module.css';
import { Profile } from './Profile/Profile';
import { Info } from './Info/Info';
import { Social } from './Social/Social';
import { Description } from './Description/Description';
import { Btn } from './Btn/Btn';
// import Burger from '../Burger/Burger';
import articles from '../Articles/article.json';

export const Menu = () => {
  return (
    <div className={style.menu}>
      {/* <Burger /> */}
      <Profile />
      <Info />
      <Social />
      <hr className={style.headLine}/>
      <Description />
      <hr className={style.headLine}/>
      <Btn />
      <hr className={style.headLine}/>
      
        <div className={style.smArticle}>
        <h4>Ссылки на статьи</h4>
        <ul>
            {articles.map(item =>
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
            )}
        </ul>
        </div>
      
    </div>
  );
};