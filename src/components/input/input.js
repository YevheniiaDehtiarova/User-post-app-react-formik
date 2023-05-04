import "./input.css";
import React from "react";
import { useField } from "formik";

function Input({ name, label }) {
  const [field] = useField({ name, type: "text" });


  if (label) {
    return (
      <div className="field">
        <label htmlFor={name}>{label}</label>    
        <input id={name} name={name} type="text" {...field} value={name} />
      </div>
    );
  }
  return <input id={name} name={name} type="text" {...field} value={name} />
}

export default Input;
