import React from 'react';
import css from './PostThumbnail.module.css';
import publicUrl from 'utils/publicUrl.js';


function PostThumbnail(props) {
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={publicUrl(props.post.photo)} alt="Post Thumbnail"/>
      </div>
    </div>
  );
}

export default PostThumbnail;
