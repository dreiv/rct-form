import React from "react"
import { FormConsumer } from "./Form"

const FormPanel = ({ isActive, children }) => (
	<FormConsumer>
		{({ activePanel }) => (activePanel === isActive ? children : null)}
	</FormConsumer>
)

export default FormPanel
