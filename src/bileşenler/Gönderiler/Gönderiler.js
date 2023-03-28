import React from "react";
import Gönderi from "./Gönderi";
import "./Gönderiler.css";

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { postLikeFnCb, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Gönderi postData={post} likeThisPost={postLikeFnCb} />
          </div>
        );
      })}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
