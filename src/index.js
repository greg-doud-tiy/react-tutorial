import React from 'react';
import ReactDOM from 'react-dom';


const user = {
	firstName: 'Gregory',
	lastName: 'Doud'
};

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
};

function TextButton(props) {
	return (
		<div>
			<input type='text' defaultValue={props.default} />
			<button onClick={clickEvent}>{props.buttonText}</button>
		</div>
	);
};

function clickEvent() {
	console.log('clicked!');
};

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	render() {
		return (
			<div>
				<span>The time is {this.state.date.toLocaleTimeString()}.</span>
			</div>
		);
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	tick() {
		this.setState({date: new Date()});
	}
	componentWillUnmound() {
		clearInterval(this.timerID);
	}
}

function App() {
	return (
		<div>
			<div style={{border:'1px solid silver'}}>
				<h1>Hello, {formatName(user)}!</h1>
			</div>
			<TextButton default='default value' buttonText='Go' />
			<Clock />
		</div>
	)
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);