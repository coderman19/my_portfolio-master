import style from './Posts.module.css';
import viet from '../../../img/bg/vietnaminfoto.png';
import falling from '../../../img/bg/falling_leaves.png';
import gallery   from '../../../img/bg/gallery_on_js.png';
import tesla from '../../../img/bg/tesla.png';
import masters from '../../../img/bg/masters_wix.png';
import reactGame from '../../../img/bg/react_game.png';
// import press from '../chapter.json';


export const Posts = () => {
 
  return (
    <div className={style.posts}>

      <div className="txt">
      <h5>Вьетнам в фотографиях</h5>
        <img src={viet} alt="" />
      </div>

      <div className="txt">
        <h5>Золотая осень</h5>
          <img src={falling} alt="" />
          <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой ручеек предупредила по всей пор даль но ее алфавит. Маленькая!</p>
      </div>

      <div className="txt">
      <h5>Галерея народов</h5>
        <img src={gallery} alt="" />
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой ручеек предупредила по всей пор даль но ее алфавит. Маленькая!</p>
      </div>

      <div className="txt">
      <h5>Tesla</h5>
        <img src={tesla} alt="" />
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой ручеек предупредила по всей пор даль но ее алфавит. Маленькая!</p>
      </div>

      <div className="txt">
      <h5>Сайт для мастеров</h5>
        <img src={masters} alt="" />
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой ручеек предупредила по всей пор даль но ее алфавит. Маленькая!</p>
      </div>

      <div className="txt">
      <h5>Игра на React</h5>
        
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большой ручеек предупредила по всей пор даль но ее алфавит. Маленькая!</p>
      </div>

      <div className="txt">
        <h5>React</h5>
        <img src={reactGame} alt="" />
        <p></p>
      </div>
    </div>
  );
};
