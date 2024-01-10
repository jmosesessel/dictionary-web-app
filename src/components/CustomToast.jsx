import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const CustomToast = ({ message }) => {
	toast(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

	return (
		<div>
			<ToastContainer/>
		</div>
	);
};

export default CustomToast;
