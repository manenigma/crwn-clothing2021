import React from "react";

const FormInput = (props) => {
	// console.log(props);
	const { type, name, label, handleChange, value } = props;
	return (
		<div className="input-group">
			<input
				type={type}
				name={name}
				className={`input__${type}`}
				onChange={handleChange}
			/>
			{label ? (
				<label
					htmlFor=""
					className={`${value.length ? "shrink" : ""} label`}
				>{`${label.toUpperCase()}`}</label>
			) : null}
		</div>
	);
};

export default FormInput;
