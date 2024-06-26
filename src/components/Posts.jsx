import { useState } from "react";
import PostObject from "./postObject";

function Posts() {
  const [like, setLike] = useState({});
  const addLike = (oldLike, index) => {
    const add = { ...like };
    if (!add[index]) {
      add[index] = oldLike;
    }
    add[index]++;
    setLike(add);
  };
  const minusLike = (oldLike, index) => {
    const minus = { ...like };
    if (!minus[index]) {
      minus[index] = oldLike;
    }
    minus[index]--;
    if (minus[index] <= 0) {
      minus[index] = "0";
    }

    setLike(minus);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {PostObject.map((post, index) => {
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">
                    {like[index] ? like[index] : post.likes}
                  </span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    addLike(post.likes, index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    minusLike(post.likes, index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
