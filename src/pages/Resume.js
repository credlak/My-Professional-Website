import React from 'react';
import PageTemplate from "./PageTemplate";

function Resume(props) {
	return (
        <PageTemplate children={
			<iframe
				style={{
			        height:"100%",
				    width:"100%",
					margin: "auto",
					border: "none",
				}}
				src="https://docs.google.com/document/d/e/2PACX-1vReLqHhJY8bkccVvQtkJxfnZiVM8ap87dbCwdIhK6JvgKFiMW19caImaNro_QVx-tF5BhcTykVbvLqJ/pub?embedded=true" title="My Resume">
			</iframe>}
        />
	);
}

export default Resume;
