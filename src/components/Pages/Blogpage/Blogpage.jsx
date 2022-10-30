import articles from '../../Articles/article.json';
import style from './Blogpage.module.css';
import {Back} from '../../Back/Back';


export const Blogpage = (props) => {

  return (
    <div className="container">
      <div className={style.blogpage}>
      <div className="txt">
      <h4>Основные этапы создания сайта</h4>
      </div>
        <div className={style.txtContent}>
        {articles.map((obj) => (
          <div className="txt">
            <h5>{obj.title}</h5>
            <p>{obj.body}</p>
              {obj.href}
          </div>
        ))}
        </div>
        <Back />
      </div>
    </div>
  );
};