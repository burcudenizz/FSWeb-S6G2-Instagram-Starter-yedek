import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { postData, likeThisPost } = props;

  return (
    <div className="post-border">
      <GönderiBaşlığı
        username={postData.username}
        thumbnailUrl={postData.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postData.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü
        likeThisPost={() => likeThisPost(postData.id)}
        begeniSayisi={postData.likes}
      />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={postData.comments} />
    </div>
  );
};

export default Gönderi;
