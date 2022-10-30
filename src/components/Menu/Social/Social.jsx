import style from './Social.module.css';
import github from '../../../img/icons/github.svg';
import whatsap from '../../../img/icons/whatsapp.svg';
import vk from '../../../img/icons/vk.svg';
import telegram from '../../../img/icons/telegram.svg';
import discord from '../../../img/icons/discord.svg';

export const Social = () => {
  return (
    <div className={style.social}>
      <div className={style.socialLink}>
      <a href="@freecoderman"><img src={telegram} alt="telegram" /></a>
      </div>
      <div className={style.socialLink}>
      <a href="https://vk.com/id287574883"><img src={vk} alt="vk" /></a>
      </div>
      <div className={style.socialLink}>
      <a href="https://github.com/coderman19"><img src={github} alt="github" /></a>
      </div>
      <div className={style.socialLink}>
        <a href="https://web.whatsapp.com/"><img src={whatsap} alt="whatsap" /></a>
      </div>
      <div className={style.socialLink}>
       <a href="#4230"><img src={discord} alt="discord" /></a>
      </div>
    </div>
  );
};