import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
const App = () => {
	const countries = ["Philippines", "London", "Japan", "Korea", "Bacoor"];
	const handleSelectedCountry = (selectedCountry: string) => selectedCountry;

	return (
		<div>
			<ListGroup
				countries={countries}
				header="Countries"
				onCountrySelected={handleSelectedCountry}
			/>
			<Alert>
				<h3>Hello World</h3>
				<p>what is the meaning of this?</p>
			</Alert>
		</div>
	);
};

export default App;
