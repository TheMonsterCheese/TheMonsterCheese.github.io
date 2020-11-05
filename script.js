function Person(props)
{
	return(
		<div className="person">
			<h1>{props.name}</h1>
			<p>Your Age: {props.age}</p>
		</div>
		);
}

var app = (
		<div>
		<Person name="Eric Xu" age = "23"/>
			<Person name="Eric Xin" age "22"/>
			</div>

);

ReactDOM.render(app,
document.querySelector('#app'));