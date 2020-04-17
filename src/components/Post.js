import React, { useState }  from 'react';
import css from './Post.module.css'; 
import timespan from 'utils/timespan.js';
import publicUrl from 'utils/publicUrl.js';
import {
    Link
  } from "react-router-dom";
  
function Post(props) {

    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false);

    function handleLike(){ 
        props.onLike(props.post.id);
        console.log("Like")
    }
    function handleUnlike(){
        props.onUnlike(props.post.id);
        console.log("Unlike")
    }
    
    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
      }

    return (
        <article className={css.post}>
            <header className={css.header}>
                <button className={css.user}>
                    <img src={publicUrl(props.user.photo)} alt='User Profile'/> 
                    <div className={css.a}>
                    <span><Link to={"/profile/"+props.user.id}>
                            {props.user.id} 
                        </Link> </span>
                    </div>
                </button>
            </header>
            <section className={css.content}>
                <div className={css.imgContainer}>
                <img src={publicUrl(props.post.photo)} alt='Post'/>
                </div>
                
            </section>

            <section className={css.actions}>
                <button>
                    {props.likes.self?
                    <img src={publicUrl('/assets/unlike.svg')} onClick={handleUnlike} alt='Unlike Action'/> :
                    <img src={publicUrl('/assets/like.svg')} onClick={handleLike} alt='Like Action'/> 
                    }
                    
                </button>
                <button onClick={e=>setToggleComment(!toggleComment)}>
                    <img src={publicUrl('/assets/comment.svg')} alt='Comment Action'/> 
                </button>
            </section>
            <section className={css.activity}>
                <div className={css.likes.count}>
                    {props.likes.count} likes
                </div>
                <div className={css.comments}>
                    <div className={css.a}>
                        <Link to={"/profile/"+props.post.userId}>
                            <span>{props.post.userId}</span> 
                        </Link>
                        <span>{props.post.desc}</span>
                    </div>      
                    {props.comments.map((comment,i)=>
                        <div key={i} className={css.a}>
                            <Link to={"/profile/"+comment.userId}>
                                <span>{comment.userId}</span>
                            </Link>
                            <span>{comment.text}</span>
                        </div>                        
                    )}
                </div>
                <time className={css.time}>
                    {timespan(props.post.datetime).toUpperCase()} AGO
                </time>
            </section>
            {toggleComment && 
                <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
                    <button type="submit">Post</button>
                </form>
            }
        </article>


       

    );
}

export default Post;


