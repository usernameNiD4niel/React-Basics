import { ReactNode } from "react";
import Button from "./Button";

interface AlertProps {
	children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
	return (
		<div className="alert alert-primary" role="alert">
			{children}
			<Button buttonUi="primary" />
			<Button buttonUi="secondary" text="Secondary" />
			<Button buttonUi="success" text="Success" />
			<Button buttonUi="danger" text="danger" />
		</div>
	);
};

export default Alert;
