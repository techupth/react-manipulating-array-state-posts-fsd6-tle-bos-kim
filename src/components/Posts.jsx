/**
 * TODO: ผู้ใช้งานสามารถกดปุ่ม Like ของแต่ละ Post ได้ เมื่อกดแล้วจำนวน Like ของ Post นั้นจะเพิ่มขึ้นทีละ 1
 * TODO: ผู้ใช้งานสามารถกดปุ่ม Dislike ของแต่ละ Post ได้ เมื่อกดแล้วจำนวน Like ของ Post นั้นจะลดลงทีละ 1
 * TODO:  กรณีที่ Post นั้นมีจำนวน Like เป็น 0 อยู่แล้ว การกดปุ่ม Dislike จำไม่ทำให้ตัวเลขลดลงต่ำกว่า 0
 * *เว็บไซต์นี้มี Post ได้มากกว่าหนึ่งอัน (อาจจะมีได้เป็นร้อย) โดย Post แต่ละอันจะต้องมีปุ่ม Like หรือ Dislike เป็นของตัวเอง
 */

import { useState } from "react";
import PostData from "../assets/PostData";

function Posts() {
  const [likes, setLikes] = useState(PostData.map((data) => data["likes"]));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newLikes = [...likes];
    if (newLikes[index] > 0) {
      newLikes[index] -= 1;
    }
    setLikes(newLikes);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {PostData.map((item, index) => {
          return (
            <div class="post-item">
              <div class="post-header">
                <h2 key={index}>
                  {item["title"]} #{item["id"]}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes" key={index}>
                    {likes[index]}
                  </span>
                </div>
              </div>
              <p class="post-content" key={index}>
                {item["content"]}{" "}
              </p>
              <div class="post-actions">
                <button class="like-button" onClick={() => handleLike(index)}>
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => handleDislike(index)}
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
