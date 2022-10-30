import style from './Contacts.module.css';

import { Back } from '../../Back/Back';
import { Social } from '../../Menu/Social/Social';
import { Info } from '../../Menu/Info/Info';
import { Description } from '../../Menu/Description/Description';

export const Contacts = () => {
  return (
    <div className="container">
      <div className={style.contacts}>
        <div className="txt">
          <h5>Мои контакты</h5>
        </div>
        <div className="txt">
          <Info />
          </div>
        
          <div className="txt">
          <Description />
          </div>
          <div className="txt">
          <p>tel: <a href="tel:+79269690922">+7(926) 969 09 22</a></p>
          <p>email: <a href="mailto:freedom-75@mail.ru">freedom-75@mail.ru</a></p>
          </div>
          <div className="txt">
          <Social />
          </div>
        
      </div>
        <Back />
    </div>
  );
};