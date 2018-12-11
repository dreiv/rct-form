import React, { Component } from "react"

const FormContext = React.createContext({})
const FormProvider = FormContext.Provider
export const FormConsumer = FormContext.Consumer

class Form extends Component {
	state = {
		activePanel: "login"
	}

	render() {
		const { children } = this.props

		return (
			<>
				<FormProvider
					value={{
						activePanel: this.state.activePanel,
						actions: {
							switchPanel: newPanel => {
								this.setState({
									activePanel: newPanel
								})
							}
						}
					}}
				>
					{children}
				</FormProvider>
			</>
		)
	}
}

export default Form
