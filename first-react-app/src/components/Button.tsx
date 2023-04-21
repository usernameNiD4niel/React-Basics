import { useState } from "react";
import ShowAlert from "./ShowAlert";

interface ButtonClassProps {
	buttonUi: "primary" | "secondary" | "danger" | "success";
	text?: string;
}

const Button = ({ buttonUi, text = "Primary" }: ButtonClassProps) => {
	const [show, setShow] = useState(false);
	const showsAlert = () => (
		<ShowAlert
			alertMessage="This is a sample alert!"
			shouldShow={true}
			typeOfAlert="success"
		/>
	);

	return (
		<>
			{show && showsAlert()}
			<button
				className={`btn btn-${buttonUi}`}
				type="button"
				onClick={() => setShow(!show)}>
				{text}
			</button>
		</>
	);
};

export default Button;
