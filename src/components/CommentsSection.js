import React from "react"
import Comments from "./Comments"

function CommentsSection({ video, isHidden }) {
	return (
		<div className={isHidden ? "hide" : "show"}>
			<h2>{video.comments.length} Comments</h2>
			{video.comments.map((comment) => (
				<Comments comment={comment} key={comment.id} />
			))}
		</div>
	)
}

export default CommentsSection
