import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '', 
			inputName: props.inputName,
			inputPhone: props.inputPhone,
			inputEmail: props.inputEmail
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitit = this.submitit.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const inputCtrl = target.name;
		const value = target.value;

		this.setState({
			[inputCtrl]: value
		});
	}
	submitit(event) {
		console.log('Submit-it!');
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		const rc = {
			name: this.state.inputName,
			phone: this.state.inputPhone,
			email: this.state.inputEmail 
		};
		console.log(rc);
		event.preventDefault();
	}
	fullId() {
		return <span>{this.state.inputName} | {this.state.inputPhone} | {this.state.inputEmail}</span>;
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>{this.state.name}'s React Application</h1>
				<table><tbody>
					<tr>
						<td>Name:</td>
						<td><input name='inputName' type='text' value={this.state.inputName} onChange={this.handleInputChange} /></td>
					</tr>
					<tr>
						<td>Phone:</td>
						<td><input name='inputPhone' type='text' value={this.state.inputPhone} onChange={this.handleInputChange} /></td>
					</tr>
					<tr>
						<td>Email:</td>
						<td><input name='inputEmail' type='text' value={this.state.inputEmail} onChange={this.handleInputChange} /></td>
					</tr>
					<tr>
						<td colSpan="2">
							<input type='submit' value='Submit' onClick={this.submitit} />
						</td>
					</tr>
				</tbody></table>
				<h4>{this.fullId()}</h4>
			</form>
		);
	}
}


function App1() {
	return (
		<span>
		<NameForm inputName="Greg" inputPhone="513-703-7315" inputEmail="gpdoud@gmail.com" />
		<hr />
		</span>
	)
};

ReactDOM.render(
	<App1 />,
	document.getElementById('root1')
);