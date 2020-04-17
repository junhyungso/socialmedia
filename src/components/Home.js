import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import Post from './Post';
import { useParams } from 'react-router-dom';

function Home(props) {
  const {store} = props;
  let {postId} = useParams(); // the variable name has to match the parameter name
  let {
    posts, users, comments, likes, currentUserId, 
    addComment, addLike, removeLike
  } = useContext(StoreContext);
  
  function findUser(post){
    return users.find(user=>user.id===post.userId);
  }

  function findComments(post){
  return comments.filter(comment=>comment.postId===post.id);
}

  function findLikes(post){
  let postLikes = likes.filter(like=>like.postId===post.id);
  return {
    self: postLikes.some(like=> like.userId===currentUserId),
    count: postLikes.length
  }
}
  // let post = {
  //   user:{
  //     id:"judy",
  //     photo:"/assets/post1.png",
  //   },
  //   post:{
  //     id:"post-1",
  //     userId:"judy",
  //     photo:"/assets/post1.png",
  //     desc:"#zootopia #excited",
  //     datetime: "2020-02-09T22:45:28Z"
  //   },
  //   likes: {
  //     self: true,
  //     count:1
  //   },
  //   comments:[
  //     {
  //       userId:"nick",
  //       text:"Welcome to Zootopia!"
  //     },
  //     {
  //         userId:"judy",
  //         text:"Thanks!😁Looking forward to meeting you!"
  //     }
  //   ]
  // }
  
  return (
    <div>
       {(postId!==undefined)?posts.filter((post => postId===post.id)).sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(post=>
				<Post
	        key={post.id}
	        user={findUser(post, store)}
	        post={post}
	        comments={findComments(post, store)}
          likes={findLikes(post, store)}
          onLike={addLike} 
          onUnlike={removeLike}
          onComment={addComment}
	      />)
      : 
      posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(post=>
				<Post
	        key={post.id} 
	        user={findUser(post, store)}
	         post={post}
	        comments={findComments(post, store)}
          likes={findLikes(post, store)}
          onLike={addLike} 
          onUnlike={removeLike}
          onComment={addComment}
	      />)}





    </div>
    // <div>
    //   <Post user={post.user} likes = {post.likes} post = {post.post} comments={post.comments}  />    
    // </div>
  );

  }



export default Home;
