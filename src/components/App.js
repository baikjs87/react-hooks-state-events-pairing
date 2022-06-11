import video from "../data/video.js";
import React, { useState } from "react";
import HideComments from "./HideComments.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);
  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)
  const [isHidden, setIsHidden] = useState(false)

  function onClickLike(){
    let likeClicked = likes + 1
    setLikes(likeClicked)
  }

  function onClickDislike(){
    let dislikeClicked = dislikes + 1
    setDislikes(dislikeClicked)
  }

  function onClickHide(){
    setIsHidden((isHidden) => !isHidden)
    console.log(isHidden)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={onClickLike}>{likes}👍</button>
			<button onClick={onClickDislike}>{dislikes}👎</button>
      <HideComments video={video} setIsHidden={onClickHide} />
      <CommentsSection video={video} isHidden={isHidden} />
    </div>
  );
}

export default App;
