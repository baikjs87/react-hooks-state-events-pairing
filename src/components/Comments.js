import React from "react";

function Comments({comment}) {
    return (
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comments