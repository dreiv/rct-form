import React from "react"
import ReactDOM from "react-dom"
import Form from "./form"
import Panel from "./form/Panel"
import FormPanel from "./form/FormPanel"
import Login from "./form/Login"
import SignUp from "./form/SignUp"

import "./styles.css"

const App = () => (
	<div className="form-wrap">
		<Form>
			<div className="tabs">
				<Panel id="login">
					<h2 className="login-tab">Login</h2>
				</Panel>
				<Panel id="signup">
					<h2 className="signup-tab">Sign Up</h2>
				</Panel>
			</div>

			<FormPanel isActive="login">
				<Login />
			</FormPanel>

			<FormPanel isActive="signup">
				<SignUp />
			</FormPanel>
		</Form>
	</div>
)

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
