import React, { useState } from "react"

function HideComments({setIsHidden}) {
	// const [isHidden, setIsHidden] = useState(false)

	function onClickHide(){
		setIsHidden()
	}

	return (
		<div className="hideComponents">
			<button onClick={onClickHide}>Hide Comments</button>
		</div>
	)
}

export default HideComments
