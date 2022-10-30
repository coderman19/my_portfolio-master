import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { Aboutpage } from '../../Pages/Aboutpage/Aboutpage';
import { Blogpage } from '../../Pages/Blogpage/Blogpage';
import { Contacts } from '../../Pages/Contacts/Contacts';
import { Homepage } from '../../Pages/Homepage/Homepage';




export const Nav = (props) => {
 
  return (
    <div className={style.nav}>
       <ul>
        <li>
          <NavLink to="/" element={<Homepage/>}>главная</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/about" element={<Aboutpage/>}>мои работы</NavLink>
        </li>
      </ul>
      <ul>
        <li>
            <NavLink to="/blog" element={<Blogpage/>}>статьи</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/contact" element={<Contacts />}>контакты</NavLink>
        </li>
      </ul>
    </div>
  );
};
