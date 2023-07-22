import React, { useState, useEffect } from 'react';

const Test = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch(`${process.env.REACT_APP_APIURL}api/blog/`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
   <>
   <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">{post.title}</div>
               <div className="delete-btn">
                  <img src={`http://127.0.0.1:8000${post.image}`} alt={post.image}/>
                  {post.image}
                  </div>
               </div>
            </div>
         );
      })}
   </div>
   </>
)
};

export default Test;