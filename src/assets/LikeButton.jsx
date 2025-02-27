import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let styles = { color: "red" };

  return (
    <>
      <h2>Like Button Create in React</h2>
      <p className="like-btn" onClick={toggleLike}>
        {isLiked ? (
          <i style={styles} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
      <p>Likes {clicks}</p>
      <hr />
    </>
  );
}
