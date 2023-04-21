import { useState } from "react";

interface ListGroupProps {
	countries: string[];
	header: string;
	onCountrySelected: (country: string) => string;
}

export default function ListGroup({
	countries,
	header,
	onCountrySelected,
}: ListGroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1 className="alert alert-primary" role={"alert"}>
				{header}
			</h1>
			<ul className="list-group">
				{countries.map((value, index) => (
					<li
						className={
							selectedIndex === index
								? `list-group-item active`
								: `list-group-item`
						}
						key={index}
						onClick={() => {
							setSelectedIndex(index);
							alert(onCountrySelected(value));
						}}>
						{value}
					</li>
				))}
				;
			</ul>
		</>
	);
}
