import React from 'react';
import { useState } from 'react';
import style from './Comment.module.css';

export const Comment = () => {
  const [comment, setComment] = useState([]);

  let myRef = React.createRef();

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);
    myRef.current.value='';
  }

  return (
    <div className={style.comment}>
    <h1>Comments</h1>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Add comment</button>
      </div>
      <div>
        <ul>
          {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};