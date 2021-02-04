import React from "react";

const FormInput = (props) => {
	// console.log("FormInput", props);
	const { label, handleChange, value, type, name, required} = props;
	return (
		<div className="input-group">
			<input
				type={type}
				name={name}
				className={`input__${type}`}
				onChange={handleChange}
				required={required}
				value={value}
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
