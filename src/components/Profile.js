import React, { useState ,useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from './PostThumbnail.module.css'; 
import PostThumbnail from './PostThumbnail';
import publicUrl from 'utils/publicUrl.js';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';

function Profile(props) {
  // const {store} = props;
  let {userId} = useParams(); // the variable name has to match the parameter name
  let button = false; 
  let {
    users, posts, followers, currentUserId, addFollower, removeFollower
  } = useContext(StoreContext);

  function follow(e){
    console.log("Follow");
    return addFollower;
  }
  function unfollow(e){
    console.log("Unfollow");
    return removeFollower;
  }

  if(userId === undefined){
    userId = currentUserId
  }
  else{
    if(userId === currentUserId){
      button = false;
      }
    else{
        button = true;

    }
  }

  let personProfile = users.find(u=>u.id===userId);
  let followersTotal = followers.filter(f=>f.userId === personProfile.id);//other follows user; user is the userId
  let followingTotal = followers.filter(f=>f.followerId === personProfile.id);//user follows other; user is the followerId

  return (
    <div>
      <div className={css.row}>
        <div className={css.col1}>        
          <img className={css.profile} src={publicUrl(personProfile.photo)} alt='User Profile'/> 
        </div>
        <div className={css.col2}>
          <div>
            {personProfile.id}
          </div>
          <div>
                  { (button)&&
                    <div>
                      {(followers.filter(foll=>(foll.followerId === currentUserId)&&(foll.userId === personProfile.id)).length>0)?
                        <button className={css.unfollowBtn} onClick={(e)=>unfollow()}>Unfollow</button> :
                        <button className={css.followBtn} onClick={(e)=>follow()}>Follow</button>}
                    </div>
                    
                  }
                </div>
        </div>
      </div>
      <div className={css.desc}>
        <b>{users.map((user)=>(user.id===personProfile.id)&&(user.name))}</b><br></br>
        {users.map((user)=>(user.id===personProfile.id)&&(user.bio))}
      </div>

      <div className={css.row}>
        <div className={css.col3}>
        <div className={css.center1}>
            <b>{(posts.filter(pst=>pst.userId===personProfile.id).length)}</b>
          </div>
          <div className={css.center2}>
           Posts
          </div>
        </div>

        <div className={css.col3}>
        <div className={css.center1}>
            <b>{(followersTotal.length)}</b>
          </div>
          <div className={css.center2}>
           Followers
          </div>
        </div>
        <div className={css.col3}>
          <div className={css.center1}>
            <b>{followingTotal.length}</b>
          </div>
          <div className={css.center2}>
           Following
          </div>
        </div>
      </div>
      <div className={css.posts}>
        
        {posts.filter(pst=>pst.userId===personProfile.id).sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
          .map(post=>
            <Link key={post.id} to={'../'+post.id}>
            <PostThumbnail
              post={post} 
            />
            </Link>
          )}
        </div>
    </div>
  );
}

export default Profile;
