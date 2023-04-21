import { useState } from "react";

interface ShowAlertProps {
	alertMessage: string;
	shouldShow: boolean;
	typeOfAlert: string;
}

const ShowAlert = ({
	alertMessage,
	shouldShow,
	typeOfAlert,
}: ShowAlertProps) => {
	const [isShow, setIsShow] = useState(false);

	const ShowAlertDialog = () => {
		const handleCloseButton = () => {
			setIsShow(!isShow);
		};

		return (
			<>
				{!isShow}
				<div
					className={`alert alert-${typeOfAlert} alert-dismissible`}
					role="alert">
					<p>{alertMessage}</p>
					<button
						type="button"
						className="btn-close"
						onClick={handleCloseButton}></button>
				</div>
			</>
		);
	};

	return <div>{shouldShow && ShowAlertDialog()}</div>;
};

export default ShowAlert;
