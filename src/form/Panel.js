import React from "react"
import { FormConsumer } from "./Form"

const Panel = props => (
	<FormConsumer>
		{({ actions }) => (
			<div onClick={() => actions.switchPanel(props.id)}>
				{props.children}
			</div>
		)}
	</FormConsumer>
)

export default Panel
