import React from "react";
import './App.css';
import './index.css'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			country: ''
		};
	}


	// componentWillMount() {
	// 	fetch("https://restcountries.com/v3.1/name/india")
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			this.setState({
	// 				items: json,
	// 				DataisLoaded: true
	// 			});
	// 		})
	// }
	searchApp = (e) => {
		e.preventDefault();
		var url = "https://restcountries.com/v3.1/name/" + this.state.country;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				console.log(this.state.country);
				this.setState({
					items: json
				});

			});
		return false;
	}
	afterSubmission(event) {
		event.preventDefault();
		this.searchApp();
	}

	render() {
		var {items} = this.state;
		

		return (

			<div className='header'>		{
				items.map((items) => (
					<h1 key={items.name}>  Country:{items.name.common}</h1>
				))
			}
				<div >
					<form onSubmit={this.searchApp}>

						<input type="text" name='search' className='input' onChange={(e) => { this.setState({ country: e.target.value }) }} placeholder='Search Country' value={this.state.country} >
						</input>
						<button type="submit" className='btn' >Search</button>

					</form>
				</div>

				<div>
					<button type="button" class="de-country">Country Details ⬇</button>
					<div class="dropdown">
						<ul >{
							items.map((items) => (
								<li key={items.name}>  Country:{items.name.official} </li>
							))
						}
						</ul>
						{/* <ul >{
				items.map((items) =>(
					<li key={items.name}>  Currencies:{items.currencies.INR.name} </li>
          		))
			}          
            </ul> */}
						<ul >{
							items.map((items) => (
								<li key={items.name}>  Maps:<a href={items.maps.googleMaps}>click</a></li>
							))
						}
						</ul>
						<ul >{
							items.map((items) => (
								<li key={items.name}>  Flag:<img src={items.flags.png} /></li>
							))
						}
						</ul>
						<ul >{
							items.map((items) => (
								<li key={items.name}>  Population:{items.population} </li>
							))
						}
						</ul>
						<ul >{
							items.map((items) => (
								<li key={items.name}>  Timezones:{items.timezones} </li>
							))
						}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
